// src/components/common/Footer.jsx
import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton, 
  Divider,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { siteContent } from '../../data/content';

// Styled components
const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.common.white,
    textDecoration: 'none'
  }
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  marginRight: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  }
}));

const Footer = () => {
  const { footer } = siteContent;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: "easeOut"
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

  // Helper function to render social media icons
  const renderSocialIcon = (platform) => {
    switch (platform) {
      case 'facebook':
        return <FacebookIcon />;
      case 'twitter':
        return <TwitterIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'youtube':
        return <YouTubeIcon />;
      default:
        return null;
    }
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.main',
        color: 'white',
        pt: 8,
        pb: 4
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={4}>
            {/* Logo and description */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box 
                  component="img" 
                  src={footer.logo || "/placeholder-logo-white.png"} 
                  alt={siteContent.header.title}
                  sx={{ 
                    height: 50,
                    mb: 2
                  }}
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.8,
                    mb: 3,
                    maxWidth: 400
                  }}
                >
                  {footer.description}
                </Typography>
                
                {/* Social media links */}
                <Box sx={{ mb: 3 }}>
                  {footer.socialMedia.map((social, index) => (
                    <SocialIconButton 
                      key={social.platform}
                      aria-label={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener"
                      size="small"
                    >
                      {renderSocialIcon(social.platform)}
                    </SocialIconButton>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Contact information */}
            <Grid item xs={12} md={3}>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    mb: 3
                  }}
                >
                  Contacto
                </Typography>
                
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex' }}>
                    <LocationOnIcon sx={{ mr: 2, opacity: 0.7 }} />
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {footer.contactInfo.address}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex' }}>
                    <PhoneIcon sx={{ mr: 2, opacity: 0.7 }} />
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {footer.contactInfo.phone}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex' }}>
                    <EmailIcon sx={{ mr: 2, opacity: 0.7 }} />
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {footer.contactInfo.email}
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>

            {/* Links columns */}
            {footer.links.map((linkGroup, groupIndex) => (
              <Grid item xs={6} md={2} key={linkGroup.title}>
                <motion.div variants={itemVariants} custom={groupIndex + 2}>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      mb: 3
                    }}
                  >
                    {linkGroup.title}
                  </Typography>
                  
                  <Stack spacing={1.5}>
                    {linkGroup.items.map((item) => (
                      <FooterLink 
                        key={item.label}
                        href={item.url}
                        variant="body2"
                      >
                        {item.label}
                      </FooterLink>
                    ))}
                  </Stack>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Divider and copyright */}
        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Typography 
          variant="body2" 
          align="center"
          sx={{ opacity: 0.6 }}
        >
          {footer.copyright}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;