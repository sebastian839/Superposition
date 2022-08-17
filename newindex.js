/*********************************************************/
// Variables

var wave1, graph, equation;
var currentIndex = 0, previousCurrentIndex = null;
var simulationRunning = false;
var startTime = 0, runningTime = 0, pauseTime = 0;
// var timer = d3.timer(callback);
var bodyId = document.body.id;

/*********************************************************/
// Setup

function setup(){
    wave1 = new waves();
    waves.compute(bodyId);

    setupSliders(wave1);
    createEventListeners();

    // schematic = new Schematic(wave1);
    graph = new Graph(wave1);
    // equation = new Equation(wave1);

    ////////////////////////////////////////////////////////down
    // if(bodyId == "numerical"){
    //     table = new Table(wave1);
    //     step = new StepCalculator(wave1);}
//////////////////////////////////////////////////////////up

// $('#play_btn').on('click', function(){
//     if(simulationRunning == false){ $("body").trigger({ type: "startTimer" }); }
//     else{ $("body").trigger({ type: "resetTimer" }); }
// })
/////////////////////////////////////////////////////////////down
// $("#next_btn").click(function(){
//     table.addRow();
//     step.addStep();
//     graph.simulateNext();
//     schematic.simulateNext();
// });
// $("#prev_btn").click(function(){
//     table.removeRow();
//     step.removeStep();
//     graph.simulatePrev();
//     schematic.simulatePrev();
// });
//////////////////////////////////////////////////////////////up
}

/*********************************************************/
// Update

function update(){
    wave1.compute();
    // schematic.update();
    graph.update();
    // equation.update();
    // if(bodyId == "numerical"){
    //     table.update();
    //     step.update();
    //     graph.checkIndex();
    //     schematic.checkIndex();
    // }
}

/*********************************************************/
// Simulate

// function simulate_start(){
//     schematic.simulate_start();
// }

function simulate(){
    // schematic.simulate();
    graph.simulate();
}

function simulate_end(){
    // schematic.simulate_end();
    graph.update();
}

/*********************************************************/
// Event Listeners

function createEventListeners(){
    $('body').on('param_change', function(d){
        $('body').trigger({ type: "resetTimer" });
        wave1[d.param].value = parseFloat(d.value);
        update();
    })

    $('body').on('startTimer', function(){
        startTimer(); 
        $('#play_btn').text('Stop'); 
    })

    $('body').on('resetTimer', function(){
        resetTimer(); 
        $('#play_btn').text('Play'); 
    })
}

// function change_yAxis(param, label){
//     graph.yaxis_param = param;
//     graph.yaxis_label = label;
//     d3.selectAll('.yaxis_dropdown').classed('active', false);
//     d3.select('#yaxis_dropdown_'+param).classed('active', true);
//     graph.update();
// }

// function change_xAxis(param, label){
//     graph.xaxis_param = param;
//     graph.xaxis_label = label;
//     d3.selectAll('.xaxis_dropdown').classed('active', false);
//     d3.select('#xaxis_dropdown_'+param).classed('active', true);
//     graph.update();
// }

// function change_timeSpan(span){
//     $('body').trigger({ type: "resetTimer" });
//     wave1.timeSpan = span;
//     d3.selectAll('.time_dropdown').classed('active', false);
//     d3.select('#time_dropdown_'+span).classed('active', true);
//     update();
// }

/*********************************************************/
// Timer functions

// function startTimer(){
// 	simulationRunning = true;
// 	startTime = Date.now();
// 	if(currentIndex == 0){ simulate_start(); }
// 	timer.restart(callback);
// }

// function resetTimer(){
// 	simulationRunning = false;
// 	pauseTime = 0; runningTime = 0;
// 	currentIndex = 0; previousCurrentIndex = null;
// 	simulate_end();
// 	timer.stop();
// }

// function callback(){
// 	if(simulationRunning){
// 		runningTime = pauseTime + (Date.now() - startTime)/1000;
// 		if(runningTime >= wave1.timeSpan){ $("body").trigger({ type: "resetTimer" }); return }
// 		currentIndex = parseInt((runningTime/dt).toFixed(0));
// 		if(currentIndex != previousCurrentIndex && currentIndex % 1 == 0){ simulate(); previousCurrentIndex = currentIndex; }
// 	}
// }

/*********************************************************/
// Run

setup();