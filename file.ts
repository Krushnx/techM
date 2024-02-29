// Define an interface for the image object
interface ImageData {
    url: string;
}

// Function to fetch images from the API
async function fetchImages(): Promise<ImageData[]> {
    const response = await fetch('your_image_api_endpoint');
    const data = await response.json();
    return data;
}

// Function to create a grid of images inside a div
function createImageGrid(imageLinks: string[]) {
    const helloDiv = document.querySelector('.Hello');
    if (helloDiv) {
        helloDiv.innerHTML = ''; // Clear previous content

        const gridContainer = document.createElement('div');
        gridContainer.classList.add('image-grid');

        // Create image elements and append them to the grid container
        imageLinks.forEach(link => {
            const imageElement = document.createElement('img');
            imageElement.src = link;
            gridContainer.appendChild(imageElement);
        });

        helloDiv.appendChild(gridContainer);
    } else {
        console.error('Could not find element with class name "Hello"');
    }
}

// Main function to fetch images, create array, sort it, and create grid
async function main() {
    try {
        const imagesData = await fetchImages();
        const imageLinks: string[] = imagesData.map(image => image.url);

        // Sort the array of image links
        imageLinks.sort((a, b) => a.localeCompare(b));

        // Create the image grid
        createImageGrid(imageLinks);
    } catch (error) {
        console.error('Error fetching or displaying images:', error);
    }
}

// Call the main function to start the process
main();
