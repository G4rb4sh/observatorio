// src/components/sections/LatestNewsSection.jsx
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
  Divider,
  Link
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { siteContent } from '../../data/content';

const LatestNewsSection = () => {
  const { latestNews } = siteContent;

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
        staggerChildren: 0.15
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
          {latestNews.title}
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            maxWidth: 700, 
            mx: 'auto',
            color: 'text.secondary'
          }}
        >
          {latestNews.description}
        </Typography>
      </Box>

      {/* News grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Grid container spacing={3}>
          {latestNews.news.map((newsItem) => (
            <Grid item xs={12} md={4} key={newsItem.id} size="grow">
              <motion.div variants={itemVariants}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  <CardActionArea 
                    component={Link}
                    href={newsItem.url}
                    sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={newsItem.image || "/placeholder-news.jpg"}
                      alt={newsItem.title}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CalendarTodayIcon sx={{ fontSize: 14, mr: 1, color: 'text.secondary' }} />
                        <Typography variant="caption" color="text.secondary">
                          {formatDate(newsItem.date)}
                        </Typography>
                      </Box>
                      
                      <Typography 
                        gutterBottom 
                        variant="h6" 
                        component="div"
                        sx={{ 
                          fontWeight: 600,
                          lineHeight: 1.3,
                          mb: 2,
                          minHeight: 60
                        }}
                      >
                        {newsItem.title}
                      </Typography>
                      
                      <Divider sx={{ mb: 2 }} />
                      
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {newsItem.description}
                      </Typography>
                      
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
          href={latestNews.viewAllLink}
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
          Ver todas las noticias
        </Button>
      </Box>
    </Box>
  );
};

export default LatestNewsSection;