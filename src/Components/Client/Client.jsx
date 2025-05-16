import { Link } from 'react-router-dom';
import wait from '../../../public/wait.json';
import Lottie from 'lottie-react';

const Client = () => {
    return (
        <div>
           <section className="flex items-center  min-h-screen  dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto mb-8">
		<div className="text-center">
		<Lottie animationData={wait} className=" h-[280px] md:h-[300px] lg:h-[600px]" />
			
			<p className="text-2xl font-semibold md:text-3xl">This page is under construction !!</p>
			<p className="text-xl font-semibold md:text-xl mt-3">Don't forget to visit after 2 days !!</p>
			
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Client;