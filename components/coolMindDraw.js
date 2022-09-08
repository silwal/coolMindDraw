/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import p5 from 'p5';
import React from 'react';
import Sketch from 'react-p5';
import './style.css';
import { Button } from 'react-native';

export class CoolMindDraw extends React.Component {
	y = 0;
	direction = '^';
	canvas = p5.canvas;
	value = 0;
	shape = 'ellipse';

	setup = (p5, parentRef) => {
		this.canvas = p5.createCanvas(400, 400).parent(parentRef);
	};

	mousePressed = (val) => {
		console.log("mouse");
		if (val != 0) {
			this.value = 255;
		}
		else this.value = 0;
		console.log(this.value);
	};

	draw = (p5) => {
		p5.fill(this.value);
		//p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
		switch(this.shape){
			case 'point':
				p5.point(p5.mouseX, p5.mouseY);
				break;
			case 'square':
				p5.rect(p5.mouseX, p5.mouseX + 40, p5.mouseY, p5.mouseY + 40);
				break;
			case 'triangle':
				p5.triangle(p5.mouseY, 150, 320, p5.mouseX, p5.mouseX, 80);
				break;
			default:
				p5.ellipse(p5.mouseX, p5.mouseY, 80, 80)
		}		
	};

	chooseShape = (shape) => {
		this.shape = shape;
	};

	render() {
		return (
			<div className="coolMindDraw">
				<h1>coolMindDraw</h1>
				<Button
					onPress={()=> this.chooseShape("point")}
					title="Point"/>
				<Button
					onPress={()=> this.chooseShape("square")}
					title="Square"
				/>
				<Button
					onPress={()=> this.chooseShape("triangle")}
					title="Triangle"
				/>
				<Button
					onPress={()=> this.chooseShape("circle")}
					title="Circle"
				/>
				<Sketch setup={this.setup} draw={this.draw} mousePressed={this.mousePressed} />
			</div>
		);
	}
}
