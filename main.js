canvas =
document.getElementById("Rumble");
Mink = canvas.getContext("2d");

Mink.beginPath();
Mink.strokeStyle = "black";
Mink.linewidth = 1;
Mink.rect(150, 143, 430, 200)
Mink.stroke();

Mink.beginPath();
Mink.strokeStyle = "blue";
Mink.linewidth = 7;
Mink.arc(240, 210, 40, 0, 2 * Math.PI);
Mink.stroke();

Mink.beginPath();
Mink.strokeStyle = "black";
Mink.linewidth = 7;
Mink.arc(290, 210, 40, 0, 2 * Math.PI);
Mink.stroke();

Mink.beginPath();
Mink.strokeStyle = "red";
Mink.linewidth = 7;
Mink.arc(340, 210, 40, 0, 2 * Math.PI);
Mink.stroke();

Mink.beginPath();
Mink.strokeStyle = "yellow";
Mink.linewidth = 7;
Mink.arc(255, 260, 40, 0, 2 * Math.PI);
Mink.stroke();

Mink.beginPath();
Mink.strokeStyle = "green";
Mink.linewidth = 7;
Mink.arc(315, 260, 40, 0, 2 * Math.PI);
Mink.stroke();