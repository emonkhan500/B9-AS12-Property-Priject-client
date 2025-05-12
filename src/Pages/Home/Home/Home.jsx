import React from 'react';
import Banner from '../Banner/Banner';
import LatestReview from '../Latest Review/LatestReview';
import ShowAdvertise from '../../../Components/ShowAdvertise/ShowAdvertise';
import Contact from '../../../Components/Contact/Contact';
import Newsletter from '../../../Components/NewsLetter/Newsletter';
import NewLatestReview from '../Latest Review/NewLatestReview';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ShowAdvertise></ShowAdvertise>
            {/* <Contact></Contact> */}
            {/* <LatestReview></LatestReview> */}
            <NewLatestReview></NewLatestReview>
            <Faq></Faq>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;