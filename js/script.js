
//questions begin
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },

  {
    question: "Which of the following is not a programming language",
    answer: "CSS",
    options: [
      "C",
      "CPP",
      "CSS",
      "Python"
    ]
  },

  {
    question: "Which of the following are immutable in python",
    answer: "set",
    options: [
      "list",
      "dictionary",
      "strings",
      "set"
    ]
  }
];
//questions end



function submitForm(event)
{
    event.preventDefault();

    let f=document.forms["welcome_form"]["name"].value;
    console.log(f);
    // console.log("form fone");
    sessionStorage.setItem("name",f);
    location.href="quiz.html";
}



var c=Math.floor((Math.random() * questions.length));
window.onload=function()
{
    show(c);
    document.getElementsByClassName("name")[0].innerHTML=sessionStorage.getItem("name");
}


var c;
let points=0;
document.getElementsByClassName('next')[0]
        .addEventListener('click', function (event) {
            // do something

            let ch_ans=document.querySelector('li.option.active').textContent;
            console.log(ch_ans);
            let g=visit[visit.length-1];  //last element of visit array (cuurent questi in qustions array)
            let ans=questions[g].answer;
            console.log(ans);

            if(ch_ans==ans)
            {
              points+=1;
              // console.log('point increment');
            }
            show(generate());
        });

function generate()
{
    return Math.floor((Math.random() * questions.length))
}
const visit=[];
function show(c)
{
    if(visit.length==questions.length)
    {
      console.log(points);
      sessionStorage.setItem("score",points);
        location.href="end.html";
        return ;
    }

    // for(let i=0;i<visit.length;i++)
    // {
    //     if(visit[i]==c){
    //         console.log(c);
    //         console.log("repeat : ", i);
    //         c=generate();
    //         i=0;
    //     }
    // }
    
    while(visit.indexOf(c)!=-1)
    {
      c=generate();
    }
    visit.push(c);
    console.log(visit);
let qs=document.getElementsByClassName("questions")[0];
qs.innerHTML=`<h2 > Q${visit.length}. ${questions[c].question}</h2>
<ul class="option_group">
    <li class="option">${questions[c].options[0]}</li>
    <li class="option">${questions[c].options[1]}</li>
    <li class="option">${questions[c].options[2]}</li>
    <li class="option">${questions[c].options[3]}</li>
</ul>`
activation();
}


function activation()
{
    let opt=document.querySelectorAll('li.option');

    for(let i=0;i<opt.length;i++)
    {
      opt[i].onclick=function ()
      {
        for(let j=0;j<opt.length;j++)
        {
          if(opt[j].classList.contains('active'))
          {
            opt[j].classList.remove('active');
          }
        }

        opt[i].classList.add('active');
      }
    }
}


var time=document.getElementsByClassName('quiz_timer')[0];
var limit=2;  
var t=limit*60;

setInterval(function(){

var min=Math.floor(t/60);
var sec=t%60;
if(min==0)
{
  time.classList.add('danger');
}

if(t==0)
{
  location.href="end.html";
  
}
sec=sec<10 ? '0'+sec : sec;
time.innerHTML=`${min}:${sec}`;
t--;

},1000);

