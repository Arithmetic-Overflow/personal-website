import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "/src/components/layout";
import Seo from "/src/components/seo";

import BoidsVid from "/src/videos/boids_demo.webm";

import * as styles from "../project-styles.module.scss";
console.log(styles);

const IndexPage: React.FC = () => (
  <Layout>
    <Seo/>
    <h1>Boids</h1>
    <div className={styles.projectPost}>
        <video autoPlay loop className={styles.projectVideo}>
            <source src={BoidsVid} />
        </video>

        <h2>
            What Are Boids?
        </h2>
        <p>
            Boids are an implementation of swarm-like behaviours intended to emulate animals such as birds or fish. In fact &#8212; boids is short for bird-like object.
        </p>

        <p>
            Each boid is an entity with a position, velocity, and a field of view. As with many simulations of physical systems the program splits execution into discrete timesteps and the program state is updated at each timestep.
        </p>

        <p>
            The force or acceleration at each timestep is adjusted according to three simple rules and then normalized.
        </p>

        <h2>
            Behavioural Rules
        </h2>

        <h3>
            Cohesion
        </h3>
        <p>
            Cohesion dictates that a flock of boids will attempt to stay together. This can be achieved by making the boids move to the center of mass of the boids in their vision.
        </p>

        <p>
            To keep the boids flocking together a force should be applied in the direction of the average position of nearby boids.
        </p>

        <h3>
            Separation
        </h3>
        <p>
            Separation dictates that a boid wil attempt not to collide with any other boids, and therefore must attempt to keep distance from nearby boids in its vision.
        </p>

        <p>
            To keep the boids from colliding a force will be applied away from all boids in vision, scaled by the reciprocal of the distance between them.
        </p>

        <h3>
            Alignment
        </h3>
        <p>
            Alignment dictates that a flock of boids will attempt to travel in the same direction as each other. This can be achieved by making the boids attempt to travel towards the same direction as boids in their vision.
        </p>

        <p>
            To keep the boids travelling as a flock a force will be applied in the direction of the average velocitiy of nearby boids
        </p>

        <h2>
            Vision
        </h2>
        <p>
            The term 'vision' or 'nearby' make intuitive sense but how would they actually be implemented?
        </p>

        <p>
            All boids within vision of a boid will be defined as the boids whose position lie in a radius of that boid and make an angle less than the field of view with the 'direction' of the boid. 
        </p>

        <p>
            Whether a boid lies within a radius of another boid can be calculated by the distance between the position of the two boids. And the direction in which a boid faces is given by its velocity vector, and the angle between a boids 'direction' and another boids position can be caluclate by the dot product of the normalized vectors.
        </p>

        <p>
            When both of these checks pass that the boid is in the vision of the boid in question.
        </p>

        <h2>
            Boundaries and Behavioural Evolution
        </h2>

        <p>
            When boids flock they tend to have no tendency to change direction once they reach an equilibrium. As such they will travel in a line off to infinity. How could we keep them on the screen?
        </p>

        <h3>
            Wraparound edges
        </h3>

        <p>
            The simple but uninteresting solution is to make boids that exit on one side of the screen appear on the other side.
        </p>

        <h3>
            Edge avoidance
        </h3>

        <p>
            A slightly more interesting solution is to make the boids avoid the edges of the screen by exerting a force in proportion to how close the boids are to the screen boundaries.
        </p>
        
        <h3>
            Evolving flock velocities
        </h3>

        <p>
            The velocity of a flock can be made to evolve with time randomly. The velocity of boids cannot be effectively randomly altered as in a flock these random changes would in theory negate each other on average.
        </p>

        <p>
            When adding random velocities at each timestep to a flock over a period of time those velocities will cancel out if the timesteps themselves are very small (averaging to zero, like in the case of altering individual boid velocity). There are many ways to deal with this problem, such as adding the same velocitiy for many contiguous time steps but perhaps the most elegant solution is to use <i>noise</i>
        </p>

        <h4>
            Noise
        </h4>

        <p>
            Noise can be defined by a function that outputs similar values for similar inputs but is random overall. As such it can generate random values that evolve over space or time. This makes it useful in determining flock direction as it avoid the problem of determining which boids are in the same flocks and what velocity to apply to each flock of boids, thereby solving our problem.
        </p>

        <p>
            Any noise function can be used in practice but a good candidate for this would be low frequency perlin or simplex noise in three dimensions (or four if the implementation of boids is three dimensional). This means that one direction can be assigned to time and the noise function with smoothly change over time.
        </p>

        <h4>
            Advantages and disadvantages
        </h4>

        <p>
            Unfortunately while this approach does dictate that on average boids will remain in the center and therefore not fly off to infinity, it does not guarantee anything and the likelihood of boids deviating from the center increases over time.
        </p>

        <p>
            A pleasant side-effect of this approach however is that it causes the boids to have some more unique flourishes and gives depth to their behaviour.
        </p>
    </div>
  </Layout>
)

export default IndexPage