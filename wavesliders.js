function setupSliders(oscillator){

    for(let i = 0; i < oscillator.parameters.length; i++){
        let temp_param = oscillator.parameters[i];
        let para = oscillator[temp_param].value;

        $("#"+temp_param+"_slider").attr({ min: oscillator[temp_param].min, max: oscillator[temp_param].max, value: oscillator[temp_param].value, step: oscillator[temp_param].step })
            .on("input", function(){
                $("#"+temp_param+"_input").val(this.value);
                $( "body" ).trigger({ type: "param_change", param: temp_param, value: this.value });
            })

        $("#"+temp_param+"_input").attr({ min: oscillator[temp_param].min, max: oscillator[temp_param].max, value: oscillator[temp_param].value, step: oscillator[temp_param].step })
            .on("input", function(){
                $("#"+temp_param+"_slider").val(this.value);
                $( "body" ).trigger({ type: "param_change", param: temp_param, value: this.value });
            })
    }

}