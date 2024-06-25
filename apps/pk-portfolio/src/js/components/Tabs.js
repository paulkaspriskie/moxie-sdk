import React, { Children, useEffect, useRef, useState } from 'react';


const Tabs = ({label, children}) => {

  const [ activeTabIndex, setActiveTabIndex ] = useState(0);
  const [ hasOverflow, setHasOverflow ] = useState(false);
  const [ isScrollTop, setIsScrollTop ] = useState(true)
  const [ isScrollBottom, setIsScrollBottom ] = useState(false)
  const ref = useRef(null);


  const scrollAdvance = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };


  const handleScroll = () => {
    const container = ref.current;

    if(container) {
      const isAtBottom = container.scrollWidth - container.scrollLeft <= container.clientWidth + 1;
      setIsScrollBottom(isAtBottom);
      setIsScrollTop(container.scrollLeft === 0);
    }


  };


  useEffect(() => {

    if(ref.current.offsetWidth < ref.current.scrollWidth) {
      setHasOverflow(true);
    }

  }, [ref]);


  return (
    <div className="component-tabs__container">
      <ul ref={ref} onScroll={handleScroll}>
        {
          Children.map(children, (child, index) =>
            <li>
              <a href="#" className={activeTabIndex === index ? 'active' : ''} onClick={() => setActiveTabIndex(index)}>
                {child.props.label}
              </a>
            </li>
          )
        }
        { isScrollTop ? null : <button onClick={() => scrollAdvance(-70)} className={'prev'}>p</button>}
        { isScrollBottom ? null : <button onClick={() => scrollAdvance(70)} className={'next'}>></button> }
      </ul>
      {
        Children.map(children, (child, index) =>
          activeTabIndex === index ? <section>{child.props.children}</section> : null
        )
      }
    </div>
  );

}

export default Tabs;
