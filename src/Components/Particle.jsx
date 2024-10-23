import React, { PureComponent } from "react";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

class ParticlesContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false, // State to manage mobile view
    };
  }

  // Custom initialization to load the triangles preset
  customInit = async (engine) => {
    await loadTrianglesPreset(engine); // Load the preset into the engine
  };

  // Detect screen size and set mobile state
  componentDidMount() {
    this.handleResize(); // Check initially if it's mobile
    window.addEventListener("resize", this.handleResize); // Add event listener to track window size changes
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize); // Clean up the event listener
  }

  handleResize = () => {
    const isMobile = window.innerWidth <= 768; // Set breakpoint for mobile view
    this.setState({ isMobile });
  };

  render() {
    const { isMobile } = this.state;

    // Customize particle options for mobile and desktop
    const options = {
      preset: "triangles", // Use triangles preset
      particles: {
        number: {
          value: isMobile ? 20 : 60, // Reduce particles for mobile view
        },
        move: {
          speed: isMobile ? 1 : 3, // Slower movement on mobile to reduce lag
        },
      },
    };

    return (
      <Particles
        options={options}
        init={this.customInit} // Initialize particles with custom settings
        className="absolute inset-0 z-0" // Ensure particles are in the background
      />
    );
  }
}

export default ParticlesContainer;
