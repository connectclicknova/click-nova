import { useEffect } from 'react';

const DevToolsBlocker = () => {
  useEffect(() => {
    const isDevToolsDisabled = import.meta.env.VITE_DISABLE_DEVTOOLS === 'true';
    
    if (!isDevToolsDisabled) {
      return; // Don't block if disabled
    }

    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {
      if (e.keyCode === 123) { // F12
        e.preventDefault();
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        e.preventDefault();
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        e.preventDefault();
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) { // Ctrl+Shift+C
        e.preventDefault();
        return false;
      }
      if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) { // Ctrl+U
        e.preventDefault();
        return false;
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Detect DevTools
    const devtools = /./;
    devtools.toString = function() {
      this.opened = true;
    };

    const checkInterval = setInterval(() => {
      console.log('%c', devtools);
      if (devtools.opened) {
        alert('Developer tools detected! Please close them.');
        window.location.reload();
      }
      devtools.opened = false;
    }, 1000);

    // Disable console methods
    if (window.console) {
      const methods = ['log', 'debug', 'warn', 'info', 'error'];
      methods.forEach(method => {
        console[method] = function() {};
      });
    }

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(checkInterval);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DevToolsBlocker;
