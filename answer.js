//qn01
function describeValue(variable)
{
    const type=typeof variable;
    if(variable)
        return `${type} | truthy`;
    else
        return `${type} | falsy`;
}
//qn02
function getDayType(day) {
  const small = day.toLowerCase();

  switch (small) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}

//qn03
function validateUsername(username)
{
    if(username.length<4)
    {
        return "Too Short";
    }
    if(username.includes(" "))
    {
        return "NO Space Allowed";
    }
    if(username.toLowerCase().includes("admin"))
    {
        return "Reserved Word";
    }

    return 'Available';
}

//qn04
function getCngFare(distance, isNight=false, waitingMinutes= 0) {

  let base = 50;

  if (distance > 2) {
    base += (distance-2)*15;
  }
  let total = base + (waitingMinutes*2);
  if (isNight) {
    total += total*0.20; 
  }
  return total;
}
console.log(getCngFare(5, true, 10))
//qn05
const getChaseVerdict=(target, scored, ballsLeft)=>{

  const runsNeeded = target-scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded/ballsLeft)*6;

  let verdict;
  if (requiredRate<=6){
    verdict = "Comfortable";
  } else if (requiredRate<=12) {
    verdict = "Tough";
  } else {
    verdict="Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
console.log(getChaseVerdict(200, 200, 12));
