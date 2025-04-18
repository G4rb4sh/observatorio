// src/components/sections/DataVisualizationSection.jsx
import React from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Grid, 
  Typography,
  CardActionArea,
  useTheme,
  Link
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BarChartIcon from '@mui/icons-material/BarChart';
import { siteContent } from '../../data/content';

const DataVisualizationSection = () => {
  const { dataVisualization } = siteContent;
  const theme = useTheme();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
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
          {dataVisualization.title}
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            maxWidth: 700, 
            mx: 'auto',
            color: 'text.secondary'
          }}
        >
          {dataVisualization.description}
        </Typography>
      </Box>

      {/* Featured visualizations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Grid container spacing={4}>
          {dataVisualization.featured.map((viz, index) => (
            <Grid item xs={12} md={6} key={viz.id}>
              <motion.div variants={itemVariants}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(to right, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      zIndex: 1
                    },
                    '&:hover': {
                      '&::before': {
                        opacity: 1
                      }
                    }
                  }}
                >
                  <CardActionArea 
                    component={Link}
                    href={viz.url}
                    sx={{ 
                      display: 'flex', 
                      height: '100%',
                      flexDirection: { xs: 'column', md: 'row' }
                    }}
                  >
                    {/* Only display image if one is provided */}
                    {viz.image && (
                      <CardMedia
                        component="img"
                        sx={{ 
                          width: { xs: '100%', sm: '40%' },
                          height: { xs: 200, sm: 'auto' }
                        }}
                        image={viz.image}
                        alt={viz.title}
                      />
                    )}
                    <CardContent 
                      sx={{ 
                        position: 'relative',
                        zIndex: 2,
                        flexGrow: 1,
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: 'white',
                          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
                        }}
                      >
                        <BarChartIcon sx={{ fontSize: 28 }} />
                      </Box>
                      
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                        sx={{ 
                          fontWeight: 600,
                          fontSize: { xs: '1.4rem', md: '1.6rem' },
                          mb: 2
                        }}
                      >
                        {viz.title}
                      </Typography>
                      
                      {/* Description text */}
                      {viz.description && (
                        <Typography 
                          variant="body1" 
                          color="text.secondary"
                          sx={{ 
                            mb: 3, 
                            lineHeight: 1.5,
                          }}
                        >
                          {viz.description}
                        </Typography>
                      )}
                      
                      <Box sx={{ mt: 'auto' }}>
                        <Typography 
                          variant="button" 
                          color="primary" 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            fontWeight: 600,
                            textTransform: 'none'
                          }}
                        >
                          Explorar visualización
                          <ArrowForwardIcon sx={{ ml: 0.5, fontSize: 18 }} />
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* CTA button */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Button 
          variant="contained" 
          color="primary"
          endIcon={<ArrowForwardIcon />}
          href={dataVisualization.ctaUrl}
          sx={{ 
            borderRadius: 2,
            py: 1.5,
            px: 4,
            fontWeight: 600
          }}
        >
          {dataVisualization.ctaButton}
        </Button>
      </Box>
    </Box>
  );
};

export default DataVisualizationSection;