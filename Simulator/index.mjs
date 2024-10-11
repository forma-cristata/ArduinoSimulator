const LED_COUNT = 1500;
const BODY_TAG = document.getElementsByTagName('body')[0];


document.addEventListener("DOMContentLoaded", async () => {
    craftTheLEDS();
    setInterval(smolder, 4000);
});


async function smolder()
{
    let timeout = 500;
    let brightest = "#e81e63";
    let color2 = "#d11b59";
    let color3 = "#ba184f";
    let color4 = "#a21545";
    let color5 = "#8b123b";
    let color6 = "#740f32";
    let color7 = "#5d0c28";
    let color8 = "#46091e";
    let color9 = "#2e0614";
    let darkest = "#17030a";
    clear();
    for(let i = 0; i < LED_COUNT; i+=10)
    {
        turnOn(brightest, i);
        turnOn(color2, i+1);
        turnOn(color3, i+2);
        turnOn(color4, i+3);
        turnOn(color5, i+4);
        turnOn(color6, i+5);
        turnOn(color7, i+6);
        turnOn(color8, i+7);
        turnOn(color9, i+8);
        turnOn(darkest, i+9);
    }
    await new Promise(r => setTimeout(r, timeout));

    for(let i = 0; i < LED_COUNT; i+=10)
    {
        turnOn(color9, i);
        turnOn(darkest, i+1);
        turnOn(brightest, i+2);
        turnOn(color2, i+3);
        turnOn(color3, i+4);
        turnOn(color4, i+5);
        turnOn(color5, i+6);
        turnOn(color6, i+7);
        turnOn(color7, i+8);
        turnOn(color8, i+9);
    }
    await new Promise(r => setTimeout(r, timeout));

    for(let i = 0; i < LED_COUNT; i+=10)
    {
        turnOn(color7, i);
        turnOn(color8, i+1);
        turnOn(color9, i+2);
        turnOn(darkest, i+3);
        turnOn(brightest, i+4);
        turnOn(color2, i+5);
        turnOn(color3, i+6);
        turnOn(color4, i+7);
        turnOn(color5, i+8);
        turnOn(color6, i+9);
    }
    await new Promise(r => setTimeout(r, timeout));

    for(let i = 0; i < LED_COUNT; i+=10)
    {
        turnOn(color5, i);
        turnOn(color6, i+1);
        turnOn(color7, i+2);
        turnOn(color8, i+3);
        turnOn(color9, i+4);
        turnOn(darkest, i+5);
        turnOn(brightest, i+6);
        turnOn(color2, i+7);
        turnOn(color3, i+8);
        turnOn(color4, i+9);
    }
    await new Promise(r => setTimeout(r, timeout));

    for(let i = 0; i < LED_COUNT; i+=10)
    {
        turnOn(color3, i);
        turnOn(color4, i+1);
        turnOn(color5, i+2);
        turnOn(color6, i+3);
        turnOn(color7, i+4);
        turnOn(color8, i+5);
        turnOn(color9, i+6);
        turnOn(darkest, i+7);
        turnOn(brightest, i+8);
        turnOn(color2, i+9);
    }
    await new Promise(r => setTimeout(r, timeout));

}



async function BrainHurtingJuice_CHOICE1()
{
    setInterval(SnakeTest1, 600);
    setInterval(SnakeTest2, 100);
}

async function SnakeTest1()
{

    let midPoint = LED_COUNT / 2;
    for(let j = 1; j < midPoint-1; j++)
    {
        if(j !== midPoint && j!==(midPoint-1) && j!==(midPoint+1))
        {
            if(j>5)
            {
                turnOff(j-5);
                turnOff(LED_COUNT-j+5);
            }
            turnOn("#ff028d", j);
            turnOn("#ff028d", LED_COUNT-1-j);
            await new Promise(r => setTimeout(r, 1));
        }
    }
    for(let k = midPoint-1; k > 1; k--)
    {
        if(k !== midPoint && k!==(midPoint-1) && k!==(midPoint+1))
        {
            if(k<(midPoint - 5))
            {
                turnOff(k+5);
                turnOff(LED_COUNT-6-k);
            }
            turnOn("#ff028d", k);
            turnOn("#ff028d", LED_COUNT-1-k);
            await new Promise(r => setTimeout(r, 1));
        }
    }

}

async function SnakeTest2()
{

    let midPoint = LED_COUNT / 2;
    for(let j = 1; j < midPoint-1; j++)
    {
        if(j !== midPoint && j!==(midPoint-1) && j!==(midPoint+1))
        {
            if(j>5)
            {
                turnOff(j-5);
                turnOff(LED_COUNT-j+5);
            }
            turnOn("#2c397f", j);
            turnOn("#2c397f", LED_COUNT-1-j);
            await new Promise(r => setTimeout(r, 1));
        }
    }
    for(let k = midPoint-1; k > 1; k--)
    {
        if(k !== midPoint && k!==(midPoint-1) && k!==(midPoint+1))
        {
            if(k<(midPoint - 5))
            {
                turnOff(k+5);
                turnOff(LED_COUNT-6-k);
            }
            turnOn("#ff028d", k);
            turnOn("#ff028d", LED_COUNT-1-k);
            await new Promise(r => setTimeout(r, 1));
        }
    }

}



function craftTheLEDS()
{
    BODY_TAG.style.marginTop = "50vh";
    BODY_TAG.style.backgroundColor = "#202121"
    for(let i = 0; i < LED_COUNT; i++)
    {
        let led = document.createElement('div');
        led.id = `led${i}`;
        led.style.backgroundColor = "#000000"
        let x = 100/LED_COUNT;
        led.style.width = `${x}vw`;
        led.style.height = "50px";
        led.style.float = "left";
        BODY_TAG.appendChild(led);

    }
}
function turnOn(color, index)
{
    document.getElementById(`led${index}`).style.backgroundColor = color;
}
function turnOff(index)
{
    document.getElementById(`led${index}`).style.backgroundColor = "#000000";
}

function clear()
{
    for(let i = 0; i < LED_COUNT; i++)
    {
        turnOff(i)
    }
}