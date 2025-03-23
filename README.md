# Nicolas Dahbar - Personal Website

This is my personal website built with Hugo using a modified version of the Sada theme. The site serves as my online resume and professional portfolio, but more importantly, it's a learning project focused on learning DevOps/CI/CD.

## Technologies Used
- Hugo (Static Site Generator)
- Tailwind CSS
- GitHub Actions
- Digital Ocean
- Nginx

## Project Purpose
This project was created to:
1. Build a professional portfolio website
2. Learn and implement DevOps principles
3. Set up a complete CI/CD pipeline
4. Practice infrastructure as code concepts

## CI/CD Pipeline
The site features a GitHub Actions workflow that:
1. Runs on every push to the main branch
2. Performs automated HTML validation
3. Builds the static site with Hugo
4. Deploys the built files to Digital Ocean via SCP
5. Includes security best practices for secret management

## Local Development
To run the site locally:
1. Install Hugo (extended version)
2. Clone this repository
3. Run `hugo server -D`

## Build
To build the site for production:
1. Run `hugo`
2. The built site will be in the `public` directory

## Theme
Based on the [Sada theme](https://github.com/darshanbaral/sada) by Darshan Baral, with custom modifications for dark mode and additional layouts.
