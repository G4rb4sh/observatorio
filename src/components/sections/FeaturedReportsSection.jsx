// src/components/sections/FeaturedReportsSection.jsx
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
  Chip,
  Link
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { siteContent } from '../../data/content';

const FeaturedReportsSection = () => {
  const { featuredReports } = siteContent;

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-UY', options);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
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
          {featuredReports.title}
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            maxWidth: 700, 
            mx: 'auto',
            color: 'text.secondary'
          }}
        >
          {featuredReports.description}
        </Typography>
      </Box>

      {/* Reports grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Grid container spacing={4}>
          {featuredReports.reports.map((report) => (
            <Grid item xs={12} md={4} key={report.id} size="grow">
              <motion.div variants={itemVariants}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: 3,
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
                    }
                  }}
                >
                  <CardActionArea 
                    component={Link}
                    href={report.url}
                    sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={report.image || "/placeholder-report.jpg"}
                      alt={report.title}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CalendarTodayIcon sx={{ fontSize: 14, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="caption" color="text.secondary">
                          {formatDate(report.date)}
                        </Typography>
                      </Box>
                      
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div"
                        sx={{ 
                          fontWeight: 600,
                          fontSize: { xs: '1.25rem', md: '1.4rem' },
                          lineHeight: 1.3,
                          mb: 2,
                          minHeight: 75
                        }}
                      >
                        {report.title}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {report.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
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
                          Leer más
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

      {/* View all button */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Button 
          variant="outlined" 
          color="primary"
          endIcon={<ArrowForwardIcon />}
          href={featuredReports.viewAllLink}
          sx={{ 
            borderRadius: 2,
            py: 1.2,
            px: 3,
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2
            }
          }}
        >
          Ver todos los informes
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedReportsSection;