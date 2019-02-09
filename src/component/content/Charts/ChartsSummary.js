import React from 'react';
const Chart	= require('chart.js');

export class BarChart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"],
        datasets: [
          {
            label: "Traffic this Year",
            data: [2, 4, 6,8, 10, 12,14, 16, 18,20, 22, 24],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
     <canvas
        style={{ width: 800, height: 450 }}
        ref={node => (this.node = node)}
      />
    );
  }
}

export class LineChart extends React.Component{
	constructor(props) {
	    super(props);
	  }
	  componentDidMount() {
	    const node = this.node;

	    var myChart = new Chart(node, {
	      type: "line",
	      data: {
	        labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
	        datasets: [{ 
		        data: [86,114,106,106,107,111,133,221,783,2478],
		        label: "Africa",
		        borderColor: "#3e95cd",
		        fill: false
		      }, { 
		        data: [282,350,411,502,635,809,947,1402,3700,5267],
		        label: "Asia",
		        borderColor: "#8e5ea2",
		        fill: false
		      }, { 
		        data: [168,170,178,190,203,276,408,547,675,734],
		        label: "Europe",
		        borderColor: "#3cba9f",
		        fill: false
		      }, { 
		        data: [40,20,10,16,24,38,74,167,508,784],
		        label: "Latin America",
		        borderColor: "#e8c3b9",
		        fill: false
		      }, { 
		        data: [6,3,2,2,7,26,82,172,312,433],
		        label: "North America",
		        borderColor: "#c45850",
		        fill: false
		      }
		    ]
		  },
		  options: {
		    title: {
		      display: true,
		      text: 'World population per region (in millions)'
		    }
		  }
	    });
	  }
	render() {
	    return (
	      <canvas
	        style={{ width: 800, height: 450 }}
	        ref={node => (this.node = node)}
	      />
	    );
    }
}


export class DoghnutChart extends React.Component{
	constructor(props) {
	    super(props);
	  }
	  componentDidMount() {
	    const node = this.node;

	    var myChart = new Chart(node, {
	    	type: 'doughnut',
	    	data: {
		      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
		      datasets: [
		        {
		          label: "Population (millions)",
		          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
		          data: [2478,5267,734,784,433]
		        }
		      ]
		    },
		    options: {
		      title: {
		        display: true,
		        text: 'Predicted world population (millions) in 2050'
		      }
		    }
		 });
	  }
	render() {
	    return (
	      <canvas
	        style={{ width: 800, height: 450 }}
	        ref={node => (this.node = node)}
	      />
	    );
  	}
}


export class HorizontalChart extends React.Component{
	constructor(props) {
	    super(props);
	  }
	  componentDidMount() {
	    const node = this.node;

	    var myChart = new Chart(node, {
	    type: 'horizontalBar',
	    data: {
		      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
		      datasets: [
		        {
		          label: "Population (millions)",
		          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
		          data: [2478,5267,734,784,433]
		        }
		      ]
		    },
		    options: {
		      legend: { display: false },
		      title: {
		        display: true,
		        text: 'Predicted world population (millions) in 2050'
		      }
		    }
		});
	  }
	  render() {
	    return (
	      <canvas
	        style={{ width: 800, height: 450 }}
	        ref={node => (this.node = node)}
	      />
	    );
  	}
}