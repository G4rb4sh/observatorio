// src/components/sections/KeyIndicatorsSection.jsx
import React from 'react';
import { Box, Card, CardContent, Grid, Typography, Icon, Link } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { siteContent } from '../../data/content';

const KeyIndicatorsSection = () => {
  const { keyIndicators } = siteContent;

  // Animation variants for cards
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: i => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.8,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  // Helper function to render trend icon
  const renderTrendIcon = (trend) => {
    if (!trend) return null;
    
    switch (trend) {
      case 'up':
        return <TrendingUpIcon sx={{ color: 'success.main', fontSize: 20 }} />;
      case 'down':
        return <TrendingDownIcon sx={{ color: 'error.main', fontSize: 20 }} />;
      case 'neutral':
        return <TrendingFlatIcon sx={{ color: 'warning.main', fontSize: 20 }} />;
      default:
        return null;
    }
  };

  return (
    <Box>
      {/* Section header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ 
            mb: 2,
            fontWeight: 700,
            color: 'primary.main',
            fontSize: { xs: '1.8rem', md: '2.4rem' }
          }}
        >
          {keyIndicators.title}
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            maxWidth: '100%', 
            mx: 'auto',
            color: 'text.secondary'
          }}
        >
          {keyIndicators.description}
        </Typography>
      </Box>

      {/* Indicators grid */}
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {keyIndicators.indicators.map((indicator, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={indicator.id} sx={{ maxWidth: '25%' }} size="grow">
            <motion.div
              variants={cardVariants}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card
                component={indicator.url ? Link : "div"}
                href={indicator.url}
                underline="none"
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: indicator.url ? 'pointer' : 'default',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
                    textDecoration: 'none'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Icon or Image */}
                  {indicator.icon && (
                    <Box 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: `${indicator.color}15`,
                        mx: 'auto',
                        overflow: 'hidden'
                      }}
                    >
                      {/* {typeof indicator.icon === 'string' && indicator.icon.startsWith('/') ? ( */}
                      {typeof indicator.icon === 'string' ? (
                        <img 
                          src={indicator.icon} 
                          alt={indicator.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'scale-down'
                          }}
                        />
                      ) : (
                        <Icon sx={{ color: indicator.color, fontSize: 32 }}>
                          {indicator.icon}
                        </Icon>
                      )}
                    </Box>
                  )}

                  {/* Value */}
                  <Typography 
                    variant="h3" 
                    component="div" 
                    align="center"
                    sx={{ 
                      fontWeight: 700,
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                      mb: 0.5
                    }}
                  >
                    {indicator.value}
                  </Typography>

                  {/* Title and trend */}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                    <Typography 
                      variant="h6" 
                      component="div" 
                      align="center"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                      }}
                    >
                      {indicator.title}
                    </Typography>
                    {indicator.trend && (
                      <Box sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                        {renderTrendIcon(indicator.trend)}
                      </Box>
                    )}
                  </Box>

                  {/* Description - full text */}
                  {indicator.description && (
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      align="center"
                      sx={{
                        lineHeight: 1.5,
                      }}
                    >
                      {indicator.description}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyIndicatorsSection;