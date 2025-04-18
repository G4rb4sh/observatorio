// src/context/ContentContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteContent as defaultContent } from '../data/content';

// Create context
const ContentContext = createContext();

// Provider component
export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent);
  const [isLoading, setIsLoading] = useState(true);

  // In a real application, you might fetch the content from an API
  // For now, we'll use the default content from our local file
  useEffect(() => {
    // Simulate API fetch
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        // In a real application, you would fetch from a CMS or API
        // const response = await fetch('/api/content');
        // const data = await response.json();
        // setContent(data);
        
        // For now, just use the default content
        setContent(defaultContent);
      } catch (error) {
        console.error('Error fetching content:', error);
        // Fallback to default content
        setContent(defaultContent);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  // Function to update content - this would typically connect to a CMS API
  const updateContent = async (section, data) => {
    try {
      // In a real application, you would send an update to your CMS or API
      // const response = await fetch(`/api/content/${section}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      
      // For now, just update the local state
      setContent(prevContent => ({
        ...prevContent,
        [section]: {
          ...prevContent[section],
          ...data
        }
      }));
      
      return { success: true };
    } catch (error) {
      console.error('Error updating content:', error);
      return { success: false, error };
    }
  };

  return (
    <ContentContext.Provider value={{ content, isLoading, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

// Custom hook to use the content context
export const useContent = () => {
  const context = useContext(ContentContext);
  
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  
  return context;
};

export default ContentContext;