
export function setupObserver(elements) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });
  
    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }

