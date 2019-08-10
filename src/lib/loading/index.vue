<template>
    <div class="wrapper">
        <h1>Loaders Kit</h1>
        <h2 class="cf">Single Element pure CSS Spinners &amp; Loaders</h2>
        <div class="row cf">
            <div class="span">
                <div class="eye"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style>

    .cf:before,
    .cf:after {
        content: " "; /* 1 */
        display: table; /* 2 */
    }

    .cf:after {
        clear: both;
    }

    html{
        color: #fff;
        font-family: 'Source Sans Pro', sans-serif;
        background-color: #59488b;
    }
    h1,h2{
        color: rgba(255,255,255,0.5);
        font-size: 40px;
        font-weight: 200;
        text-align: center;
        margin: 40px 0 0 0;
    }
    h2{
        font-size: 18px;
        margin: 0;
        padding: 0;
        margin: 10px 0;
    }
    h1 span{
        font-size: 30px;
    }

    a{
        text-decoration: none;
    }
    a:hover{
        transition: all linear 0.2s;
    }
    ::-moz-selection {
        background: #b3d4fc;
        text-shadow: none;
    }
    ::selection {
        background: #b3d4fc;
        text-shadow: none;
    }


    .wrapper{
        width:100%;
        height:100%;
        margin: 0 auto;
        overflow:auto;
        display: flex;
        flex-direction:column;
        justify-content: center;
        background: #59488b;
        position: absolute;
        top:0;
    }
    .row{
        text-align: center;
        padding: 50px 0;
        display: flex;
        justify-content: center;
    }
    .span, .span_large{

        width: 100px;
        background-color: rgba(0,0,0, 0.02);
        height: 100px;
        vertical-align: middle;
        border-radius: 1px;
        margin-right: 100px;
    }
    .span:last-child{
        margin-right: 0px;
    }
    .eye{

        width: 20px;
        height: 20px;
        background-color: rgba(255,255,255,0.8);
        border-radius: 50%;
        box-shadow: 30px 0px 0px 0px rgba(255,255,255,0.8);
        position: relative;
        margin: 36px 26px;
    }

    .eye:after{
        background-color: #59488b;
        width: 10px;
        height: 10px;
        box-shadow: 30px 0px 0px 0px #59488b;
        border-radius: 50%;
        left: 9px;
        top: 8px;
        position: absolute;
        content: "";
        -webkit-animation: eyeball 2s linear infinite alternate;
        -moz-animation: eyeball 2s linear infinite alternate;
        animation: eyeball 2s linear infinite alternate;
    }
    @-webkit-keyframes eyeball{
        0%{left: 9px;}
        100%{left: 1px;}
    }
    @-moz-keyframes eyeball{
        0%{left: 9px;}
        100%{left: 1px;}
    }
    @keyframes eyeball{
        0%{left: 9px;}
        100%{left: 1px;}
    }

    /*coffee cup*/
    .coffee_cup{
        width: 20px;
        height: 24px;
        border: 1px rgba(255,255,255,1) solid;
        border-radius: 0px 0px 5px 5px;
        position: relative;
        margin: 36px auto;
    }
    .coffee_cup:after, .coffee_cup:before{
        position: absolute;
        content: "";
    }
    .coffee_cup:after{
        width: 5px;
        height: 12px;
        border: 1px #fff solid;
        border-left: none;
        border-radius: 0px 20px 20px 0px;
        left: 20px;
    }
    .coffee_cup:before{
        width: 1px;
        height: 6px;
        background-color: rgba(255,255,255,1);
        top: -10px;
        left: 4px;
        box-shadow: 5px 0px 0px 0px rgba(255,255,255,1),
        5px -5px 0px 0px rgba(255,255,255,1),
        10px 0px 0px 0px rgba(255,255,255,1);
        -webkit-animation: steam 1s linear infinite alternate;
        -moz-animation: steam 1s linear infinite alternate;
        animation: steam 1s linear infinite alternate;
    }

    @-webkit-keyframes steam{
        0%{height: 0px;}
        100%{height: 6px;}
    }
    @-moz-keyframes steam{
        0%{height: 0px}
        100%{height: 6px;}
    }
    @keyframes steam{
        0%{height: 0px}
        100%{height: 6px;}
    }
</style>