import React from 'react';
import '../App.css';
import './ShowCase.css';
import MediaCard from './MediaCard';
import Partners from './Partners';
import SideCard from './SideCard';

function ShowCase() {
  return (
    <div className='showcase'>
      <h1>What we offer</h1>
	<br /> <br />
	<div class="cards__container" >
		<ul className='cards__items'>
			<SideCard 
				description='We have created unique biological kits aiming at intensive training of lab skills. You will receive a special Science Box filled with a set of lab consumables and patented reagents that will help you to carry out a variety of experiments.'
				image='images/lab2.png'
			/>
		</ul>
		<ul className='cards__items'>
			<SideCard 
				description='Our first product line is dedicated to Microbiology. The first Science Box provides an opportunity to isolate soil bacteria (actinomycetes), and screen them for new antibiotic-producing strains.'
				image='images/soil.jpg'
			/>

		</ul>
		<ul className='cards__items'>
			<SideCard 
				description='With this kit you will work out: operating with Petri dishes, cultivation of bacteria isolates, results analysis. Our unique composition of isolation media and exceptional reporter strains will guarantee the success and convenient analysis of the results obtained. The special color code will even tell you which group of antibiotics did you manage to detect.'
				image='images/petries.jpg'
			/>

		</ul>

	</div>
      <br /><br />
      <h1>Our customers</h1>
	<br /><br />
	<div class="cards__container" >
		<ul className='cards__items'>
			<MediaCard 
				title='Exam and Olympiad Tutors'
				description='In recent years, biology exams and olympiads include more and more tasks in practical microbiology. Science box will help students practice their laboratory skills and excel in these competitions.'
				image='images/ege.jpg'
			/> 
			<MediaCard 
				title='Biology-oriented schools'
				description='Most 10th grade students are to carry out and defend a scientific project in both governmental and private schools. We provide an opportunity to conduct a sophisticated scientific project right at school, in the absence of special lab equipment! The students will have a real chance to successfully present their projects at different national competitions and conferences!'
				image='images/contest.jpg'
			/> 
			<MediaCard 
				title='Summer schools and Educational camps'
				description='Science box application is not limited to classrooms. Studying antibiotics-producing soil bacteria in summer schools and camps students can grasp the importance of microbiology in medicine and agriculture.'
				image='images/summercamp.png'
			/> 
 
		</ul>
	</div>
	<br /><br />
	<h1> Our partners </h1>
	<br /><br />
	<div class="cards__container" >
		<Partners />
	</ div>
	<br /><br />
    </div>
  );
}

export default ShowCase;