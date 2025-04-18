// src/components/sections/HeroSection.jsx
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { siteContent } from '../../data/content';

const HeroSection = () => {
  const { hero } = siteContent;
  
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.2 * custom,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.6,
        duration: 0.5
      }
    },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.3
      }
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '70vh', md: '80vh' },
        maxHeight: 700,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'primary.dark',
        color: 'white',
      }}
    >
      {/* Background image with overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundImage: 'linear-gradient(45deg, rgba(12, 77, 162, 0.8) 0%, rgba(0, 0, 0, 0.7) 100%)',
          }
        }}
      >
        <Box
          component="img"
          src={hero.backgroundImage || "/placeholder-hero.jpg"}
          alt="Hero background"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Content */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 800 }}>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              {hero.title}
            </Typography>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: 600,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                textShadow: '0 1px 3px rgba(0,0,0,0.3)',
              }}
            >
              {hero.subtitle}
            </Typography>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href={hero.ctaUrl}
              sx={{ 
                py: 1.5, 
                px: 3,
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: '0 4px 14px 0 rgba(255, 107, 0, 0.39)',
              }}
            >
              {hero.ctaButton}
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;