import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
    courses = [
    {
      id: 101, name: 'JavaScript for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: 'assets/courses/image1.jpg',
      description: 'In this course, you will learn fundamentals of JS. This course is purely designed for students.'
    },
    {
      id: 102, name: 'HTML & CSS Basics', author: 'Sarah Smith', duration: 32, type: 'Free',
      price: 0.00, ratings: 4.0, image: 'assets/courses/image2.jpg',
      description: 'Learn the basics of HTML and CSS to create beautiful web pages.'
    },
    {
      id: 103, name: 'Python Programming', author: 'Michael Johnson', duration: 60, type: 'Premium',
      price: 49.99, ratings: 4.5, image: 'assets/courses/image3.jpg',
      description: 'Master Python programming from scratch and become a Python developer.'
    },
    {
      id: 104, name: 'Web Development Fundamentals', author: 'Emily Davis', duration: 56, type: 'Free',
      price: 0.00, ratings: 4.2, image: 'assets/courses/image4.jpg',
      description: 'Get started with the basics of web development, including HTML, CSS, and JavaScript.'
    },
    {
      id: 105, name: 'Data Science with R', author: 'David Wilson', duration: 72, type: 'Premium',
      price: 79.99, ratings: 4.7, image: 'assets/courses/image5.jpg',
      description: 'Learn data science using R and build predictive models and data visualizations.'
    },
    {
      id: 106, name: 'Mobile App Development with React Native', author: 'Maria Rodriguez', duration: 64, type: 'Premium',
      price: 69.99, ratings: 4.8, image: 'assets/courses/image1.jpg',
      description: 'Build mobile apps for iOS and Android using React Native framework.'
    },
    {
      id: 107, name: 'Java Programming for Beginners', author: 'Chris Baker', duration: 54, type: 'Free',
      price: 0.00, ratings: 4.0, image: 'assets/courses/image2.jpg',
      description: 'Start your journey into Java programming with this beginner-friendly course.'
    },
    {
      id: 108, name: 'Machine Learning Fundamentals', author: 'Sophia Lee', duration: 68, type: 'Premium',
      price: 59.99, ratings: 4.6, image: 'assets/courses/image5.jpg',
      description: 'Learn the basics of machine learning and build predictive models.'
    },
    {
      id: 109, name: 'Web Design with Adobe XD', author: 'Daniel Turner', duration: 40, type: 'Premium',
      price: 39.99, ratings: 4.4, image: 'assets/courses/image4.jpg',
      description: 'Design and prototype web interfaces using Adobe XD software.'
    },
    {
      id: 110, name: 'C++ Programming for Intermediate', author: 'Linda Parker', duration: 52, type: 'Free',
      price: 0.00, ratings: 4.1, image: 'assets/courses/image3.jpg',
      description: 'Take your C++ programming skills to the next level with this intermediate course.'
    }
  ];
  
  //parent to child part
  getTotalCourses() {
    return this.courses.length;
  }

  getTotalFreeCourses() {
    return this.courses.filter(course => course.type === 'Free').length;
  }

  getTotalPremiumCourses() {
    return this.courses.filter(course => course.type === 'Premium').length;
  }

  //child to parent part
  courseCountRadioButton: string = 'All'; //this property is also gonna keep track of which radio button has been selected in the webpage, but this property will keep track of the value of the radio button in the parent component, so in the child component we also have a property which is keeping track of the radio button which is selected in the webpage (selectedRadioButtonValue)

  onFilterRadioButtonChanged(data: string) {
    this.courseCountRadioButton = data; 
    //console.log(this.courseCountRadioButton); 
  }

  //Search
  searchText: string = ''; 
  
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    //console.log("search text: " , this.searchText);
  }
}
