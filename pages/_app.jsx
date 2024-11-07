import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

//Global Styles
import '../assets/styles/Projects.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//MUI Theme manipulation
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Homepage from '.';
import Blog from './Blog';
import OurExpertise from './our-expertise';
import ContactUs from './ContactUs';

import Projects from './projects/[sub_category_name]';
import ProjectDescription from './projects/[sub_category_name]/[title]';
import Submission from './Submission';
import Post from './blog/[slug]';
import Architecture from './architecture';
import Residentials from './residentials';
import CommercialCategory from './commercial';
import InstitutionCategory from './institutions';
import Masterplanning from './masterplanning';

//shop Navigation
import Shop from './shop'; //Home page of shop
import HousePlans from './house-plans';
import Wishlist from './shop/wishlist';
import Cart from './shop/cart';
import ProductDescription from '../shop/productDescription';
import FilteredCategoriesPage from './[category]';
import CheckOutPage from './shop/checkout';

export default function App() {
  //Starts new page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //MUI Theme manipulation
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-expertise" element={<OurExpertise />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/submission-successful" element={<Submission />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/residentials" element={<Residentials />} />
          <Route path="/:sub_category_name" element={<Projects />} />
          <Route path="/projects/:sub_category_name/:title" element={<ProjectDescription />} />
          <Route path="/commercial" element={<CommercialCategory />} />
          <Route path="/institutions" element={<InstitutionCategory />} />
          <Route path="/masterplanning" element={<Masterplanning />} />
          {/* Shop Routes */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/house-plans" element={<HousePlans />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:slug" element={<ProductDescription />} />
          <Route path="/shop/:category" element={<FilteredCategoriesPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </ThemeProvider>
  );
}
