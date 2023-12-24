import Hero from './(Components)/Hero';
import Section from './(Components)/Section';
import DiscountSec from './(Components)/DiscountSec';
import Assured from './(Components)/Assured';
import Footer from './(Components)/Footer';
import RecentProducts from './(Components)/RecentProducts';
import FlatSale from './(Components)/FlatSale';
import BrandNames from './(Components)/BrandNames';
import YearEndSale from './(Components)/YearEndSale';

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Home() {
  return (
    <>
      <Hero />
      <Section>
        <RecentProducts />
      </Section>
       <Section>
        <FlatSale />
      </Section>
      <Section>
        <DiscountSec />
      </Section>
      <Section>
        <BrandNames />
      </Section>
      <Section>
        <YearEndSale />
      </Section>
      <Assured />
      <Footer />
    </>
  )
}
