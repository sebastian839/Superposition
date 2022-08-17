function waves(){

    this.parameters = [
        'amplitude1', 'omega1', 'phasedifference1', 'amplitude2', 'omega2',
        'timestep'
    ];


    this.amplitude1 = { value: 5, min: 0.1, max: 10, step: 0.1 };
    this.omega1 = { value: 10, min: 0.1, max: 20, step: 0.1 };
    this.phasedifference1 = { value: 0, min: 1, max: 10, step: 0.1 };
    this.amplitude2 = { value: 6, min: 0.1, max: 10, step: 0.1 };
    this.omega2 = { value: 11, min: 0.1, max: 20, step: 0.1 };
    
    this.timeSpan = 10;

    this.timeSpan = 10;
    this.timestep = { value: 0.1, min: 0.01, max: 1, step: 0.01 };

    this.compute();
}

/*******************************************************************/


waves.prototype.compute = function(){
    a1 = this.amplitude1.value;
    w1 = this.omega1.value;
    phi1 = this.phasedifference1.value;

    a2 = this.amplitude2.value;
    w2 = this.omega2.value;
    

    this.h = this.timestep.value;
    h = this.h;
    dt = h;

    this.y1_list = [];
    this.y2_list = [];
    this.t_list = [];
    this.t_list[0] = 0;


    for(var i = 0; i < this.timeSpan/h; i++){
        t = this.t_list[i];
        this.y1_list[i] = a1 * Math.sin(w1*t);
        this.y2_list[i] = a2 * Math.sin(w2*t + phi1);
        this.t_list[i+1] = this.t_list[i] + h;
        this.computeSystemStates();
    }
}

waves.prototype.computeSystemStates = function(){
    this.system_States = [];
    this.system_States = this.t_list.map(d => { return {time: d}; })
    this.y1_list.map((d, i) => { this.system_States[i].Y2 = d; });
    this.y2_list.map((d, i) => { this.system_States[i].Y1 = d; });
    // this.system_States.map(d => {
    //     d.acc = this.f_v(d.time, d.disp, d.vel);
    //     d.kineticEnergy = 0.5*m*d.vel*d.vel;
    //     let temp_disp = d.disp > 0 ? d.disp : 0;
    //     d.potentialEnergy = 0.5*k*d.disp*d.disp + 0.5*k_aux*temp_disp*temp_disp;
    //     d.totalEnergy = d.kineticEnergy + d.potentialEnergy;
    //     d.appliedForce = F*Math.sin(ω*d.time);
    };

    
    