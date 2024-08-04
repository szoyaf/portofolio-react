import React, { useRef, useEffect } from 'react';
import './App.css';
import { Button } from '@mui/material';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Page1 from './page 1.jsx';
import Page2 from './page 2.jsx';
import Page3 from './page 3.jsx';
import Page4 from './page 4.jsx';
import Page5 from './page 5.jsx';
import Pagination from "./components/Pagination.jsx";

document.body.style = 'background: black;';
const pages = ['/home', '/aboutme', '/experiences', '/projects', '/socials'];

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (!hasRedirected.current) {
      if (location.pathname !== '/home') {
        navigate('/home', { replace: true });
      }
      hasRedirected.current = true;
    }
  }, [location.pathname, navigate]);

  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);
  const canvasRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;

    if (!canvas || !banner) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext('2d');
    let dots = [];
    const arrayColors = ['#00B2E3', '#00475B', '#D9F7FF', '#005971'];

    for (let index = 0; index < 50; index++) {
      dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random() * 4)]
      });
    }

    const drawDots = () => {
      dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.shadowColor = dot.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      });
    };
    
    drawDots();

    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
      let mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top
      };
      dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    const handleResize = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;

      dots = [];
      for (let index = 0; index < 50; index++) {
        dots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * 5)]
        });
      }
      drawDots();
    };

    banner.addEventListener('mousemove', handleMouseMove);
    banner.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    return () => {
      banner.removeEventListener('mousemove', handleMouseMove);
      banner.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavigation = (direction) => {
    const newIndex = (currentPageIndex + direction + pages.length) % pages.length;
    setCurrentPageIndex(newIndex);
    navigate(pages[newIndex]);
  };

  const handleClick = (direction, buttonRef) => {
    handleNavigation(direction);
    buttonRef.current.classList.add("animate");
    setTimeout(() => {
      buttonRef.current.classList.remove("animate");
    }, 600);
  };  

  return (
    <div className="app-container" ref={bannerRef}>
      <canvas id='dotsCanvas' ref={canvasRef}></canvas>

      <div className="sections-container">
        <section className='section' style={{ flex: 1, paddingLeft: 8 }}>
          <Button
            ref={leftButtonRef}
            variant="outlined"
            className='button'
            sx={{
              color: "#D9F7FF",
              borderColor: '#00B2E3',
              '&:hover': { borderColor: '#D9F7FF', borderWidth: 3, backgroundColor: 'black', boxShadow: '0 0 25px rgba(0, 71, 91, 1)' },
              borderRadius: '50%',
              width: 'calc(2vw + 20px)',
              height: 'calc(2vw + 20px)',
              minWidth: 'calc(2vw + 20px)',
              borderWidth: 3,
              backgroundColor: 'black'
            }}
            onClick={() => handleClick(-1, leftButtonRef)}
          >
            <KeyboardArrowLeftRoundedIcon sx={{ fontSize: 'calc(2vw + 14px)' }} />
          </Button>
        </section>

        <section className='section middle-section relative z-10 flex flex-col h-screen justify-center items-center self-center content-center' style={{ flex: 3 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Page1 />} />
            <Route path="/aboutme" element={<Page2 />} />
            <Route path="/experiences" element={<Page3 />} />
            <Route path="/projects" element={<Page4 />} />
            <Route path="/socials" element={<Page5 />} />
          </Routes>
        </section>

        <section className='section' style={{ flex: 1, paddingRight: 8 }}>
          <Button
            ref={rightButtonRef}
            variant="outlined"
            className='p-0 m-0 button'
            sx={{
              color: "#D9F7FF",
              borderColor: '#00B2E3',
              '&:hover': { borderColor: '#D9F7FF', borderWidth: 3, backgroundColor: 'black', boxShadow: '0 0 25px rgba(0, 71, 91, 1)' },
              borderRadius: '50%',
              width: 'calc(2vw + 20px)',
              height: 'calc(2vw + 20px)',
              minWidth: 'calc(2vw + 20px)',
              borderWidth: 3,
              backgroundColor: 'black',
            }}
            onClick={() => handleClick(1, rightButtonRef)}
          >
            <KeyboardArrowRightRoundedIcon sx={{ fontSize: 'calc(2vw + 14px)' }} />
          </Button>
        </section>
      </div>

      <Pagination
        pages={pages}
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
      />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;