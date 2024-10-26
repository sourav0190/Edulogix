// src/components/Home.jsx
import React from 'react';
import backgroundImage from '../bg.jpg'; // Adjust the path if necessary

const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`, // Set background image for the entire app
                backgroundSize: 'cover', // Cover the entire container
                backgroundPosition: 'center', // Center the background image
                minHeight: '100vh', // Ensure full height of the viewport
                margin: '20px', // Set margin to create space around the container (adjust as needed)
                padding: '10px', // Set padding as needed
                borderRadius: '50px', // Rounded corners for the App container
                display: 'flex', // Use flexbox for layout
                justifyContent: 'flex-start', // Align content to the left
                alignItems: 'center', // Center content vertically
            }}
        >
            <div
                style={{
                    color: 'white', // Text color for visibility
                    maxWidth: '400px', // Limit text width
                    marginLeft: '20px', // Space from the left
                    opacity: 0, // Start hidden for fade effect
                    animation: 'fadeIn 1s forwards', // Animation for fade-in effect
                }}
            >
                <h1
                    style={{
                        fontFamily: 'Montserrat, sans-serif', // Different font for heading
                        color: '#00004d', // Navy color for heading
                        margin: '0 0 10px 0', // Remove default margin, add bottom margin
                        transition: 'opacity 0.5s ease-in', // Transition for fade effect
                        opacity: 0, // Start hidden for fade effect
                        animation: 'fadeIn 1.5s forwards', // Animation for fade-in effect
                        fontWeight: 'bold', // Bold font weight
                    }}
                >
                    Empower Your Learning Journey with EduLogix
                </h1>
                <p
                    style={{
                        fontFamily: 'Cursive, sans-serif', // Cursive font for paragraph
                        color: '#000000', // Black color for paragraph
                        marginLeft: '10px', // Left margin for the paragraph
                        marginBlockStart: '1.33em', // Margin at the start of the block
                        marginBlockEnd: '1.33em', // Margin at the end of the block
                        marginInlineStart: '0px', // Inline start margin
                        marginInlineEnd: '0px', // Inline end margin
                        fontWeight: 'bold', // Bold font weight
                        unicodeBidi: 'isolate', // Unicode bidi isolation
                        transition: 'opacity 0.5s ease-in', // Transition for fade effect
                        opacity: 0, // Start hidden for fade effect
                        animation: 'fadeIn 2s forwards', // Animation for fade-in effect
                    }}
                >
                    EduLogix believes education unlocks potential. We empower learners with innovative tools and resources to achieve academic goals, transforming the learning experience through technology and community support. Join us!
                </p>
            </div>
        </div>
    );
};

export default Home;
