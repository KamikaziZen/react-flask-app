import React from 'react';
import '../../App.css';
import ReviewBody from '../ReviewBody.js';

function ReviewsPage() {
        return (
                <div className='reviews'>
                        <h1>Customer Reviews</h1>
			<br /><br />
			<ReviewBody 
				firstName='Yuliya'
				lastName='Zakalyukina'
				occupation='Biology Tutor'
				profilePic='photos/reviewer1.png'
				comment='I am a microbiology teacher and a scientist as well, and I was extremely happy to be the first who tested your prototype in practice during the Sirius Summer School in 2021. Students were 100% involved in the process, they leaned how to operate with Petri dishes, successfully isolated bacteria from soil and even found some new antibiotic-producing strains!'
			/>
			<ReviewBody 
				firstName='Daria'
				lastName='Yagoda'
				occupation='Biology Tutor at Clever Moscow'
				profilePic='photos/reviewer2.png'
				comment='I am a biology and chemistry teacher in the Clever Moscow. Our goal is to inspire and help students to learn biology via exciting experiments and interaction with animals. Now we do classes in the format of biological clubs for school children of 6-7 grades. I think that your project will suit for our company. I heard that the leadership was thinking about running new biology clubs for older students (8-9 grades). Looks like your project is made for this purpose!'
			/>
			<ReviewBody 
				firstName='Alla'
				lastName='Ivanova'
				occupation='Biology Teather'
				profilePic='photos/reviewer3.jpg'
				comment='Nowadays, it is simply not enough to pass the state exam if you want to study at the University. The set you offer will let us to carry out scientific projects on biology and ecology subjects right at school! Finally, my students will become able to present these projects at various competitions and conferences, which in turn confers significant benefits for university admission. I think I am ready buy your box among the first buyers.'
			/>
			<ReviewBody 
				firstName='Liudmila'
				lastName='Gusakova'
				occupation='Kit Developer customer at Clever Moscow'
				profilePic='photos/reviewer4.jpg'
				comment='The kit you presented looks really impressive and interesting! But I am not sure if we can bring it to market, since you are concerned about safety and recommend to carry out experiments only in person with a teacher. However, it may work out. I can offer you a trial lesson with our students in September-October. And if everything is ok, we may continue collaboration.'
			/>
			<ReviewBody 
				firstName='Svetlana'
				lastName='Pogidaeva'
				occupation='Biology Teather'
				profilePic='photos/reviewer3.jpeg'
				comment='I really like your idea, sounds interesting! Indeed, I wanted to add microbiology experiments into the learning process (especially because I am an ecologist and help students with their ecological scientific projects). The only thing that stopped me was the lack of necessary equipment. The Web Platform aiming at giving a feedback to biology teachers [users, customers] is an extremely important thing! Unfortunately, in the school of mine, the project will be interesting only to a few (like 5-6 students, no more). Anyway, it is a very useful tool for biology teachers, especially those of profile classes. So I will definitely buy your product when it is ready! '
			/>
			<ReviewBody 
				firstName='Olga'
				lastName='Domashina'
				occupation='Biology Tutor'
				profilePic='photos/reviewer6.png'
				comment='This is exactly what we need for our Biology Summer School! Our goal in Lyceum is to encourage and inspire students with science. We are really good at this regarding Physics and Math. Now we are developing extracurricular summer activities in Chemistry and Biology. Waiting for a collaboration!'
			/>
                </div>
        );
}

export default ReviewsPage;
