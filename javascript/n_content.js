// 获取按钮和单选框的元素
const leftlabelButtons = document.getElementsByClassName('leftlabel');
const buttons = document.getElementsByClassName('week-div-button');
var radioOptions = document.getElementsByName('radioOptions');

// 记录按钮点击状态、所选按钮的值和单选框选择状态
var buttonClicked = false;
var selectedWeekValue = '';
var selectedMonthValue = '';
var radioOptionSelected = false;
// 声明按钮全局变量
let selectedOption = '';

//监听月份的：hover
for (const button of leftlabelButtons) {
    button.addEventListener('mouseenter', function (event) {
        // 获取月份按钮文字值
        var buttonValue = button.innerHTML.trim();
        selectedMonthValue = buttonValue;
    });
}

// 监听按钮的点击事件
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        // 获取周数按钮文字值
        var buttonValue = button.innerHTML.trim();
        selectedWeekValue = buttonValue;

        // 更新按钮点击状态
        buttonClicked = true;

        // 如果单选框已选择，则进行页面跳转
        if (radioOptionSelected && selectedWeekValue && selectedMonthValue && getSelectedOption() !== "" && getSelectedOption() == "Wl") {
            var url = './' + selectedMonthValue + '&' + selectedWeekValue + '&' + getSelectedOption() + '.html';
            window.location.href = url;
        } else if (radioOptionSelected && selectedMonthValue && getSelectedOption() !== "" && getSelectedOption() == "Dl") {
            var url = './' + selectedMonthValue + '&' + getSelectedOption() + '.html';
            window.location.href = url;
        }
    });
}

// 监听单选框的改变事件
radioOptions.forEach(function (option) {
    option.addEventListener('change', function () {
        // 更新单选框选择状态
        radioOptionSelected = true;

        // 如果按钮已点击且存在按钮值，则进行页面跳转
        if (buttonClicked && selectedWeekValue && selectedMonthValue && getSelectedOption() == 'Wl') {
            var url = './' + selectedMonthValue + '&' + selectedWeekValue + '&' + getSelectedOption() + '.html';
            window.location.href = url;
        } else if (selectedWeekValue && selectedMonthValue && getSelectedOption() == 'Dl') {
            var url = './' + selectedMonthValue + '&' + getSelectedOption() + '.html';
            window.location.href = url;
        }
    });
});

// 获取选中的单选框的值
function getSelectedOption() {
    var selectedValue = "";
    radioOptions.forEach(function (option) {
        if (option.checked) {
            selectedValue = option.value;
        }
    });
    return selectedValue;
}






// 在第一行添加以下变量
var isWeekDivHovered = false;
var hideWeekTimeout;

var julButton = document.getElementById("julButton");
var julWeekDiv = document.getElementById("julWeekDiv");
var augButton = document.getElementById("augButton");
var augWeekDiv = document.getElementById("augWeekDiv");
var sepButton = document.getElementById("sepButton");
var sepWeekDiv = document.getElementById("sepWeekDiv");
var isWeekDivHovered = false;
var hideWeekTimeout;

function showWeek(e, month) {
    var weekDiv = document.getElementById(month + "WeekDiv");
    var buttonRect = e.target.getBoundingClientRect();
    var viewportOffset = buttonRect.top + window.pageYOffset;

    weekDiv.style.left = buttonRect.left + 10 + "px";
    weekDiv.style.top = viewportOffset + buttonRect.height + "px";
    weekDiv.style.display = "block";

    // 隐藏其他按钮的放大效果
    julButton.classList.remove("highlighted");
    augButton.classList.remove("highlighted");
    sepButton.classList.remove("highlighted");

    // 为当前按钮添加放大效果
    e.target.classList.add("highlighted");

    weekDiv.addEventListener("mouseenter", function () {
        isWeekDivHovered = true;
    });

    weekDiv.addEventListener("mouseleave", function () {
        isWeekDivHovered = false;
        setTimeout(function () {
            hideWeek(month);
        }, 200);
    });
}

function hideWeek(month) {
    var weekDiv = document.getElementById(month + "WeekDiv");
    if (isWeekDivHovered) return;
    weekDiv.style.display = "none";
    julButton.classList.remove("highlighted");
    augButton.classList.remove("highlighted");
    sepButton.classList.remove("highlighted");
}

julButton.addEventListener("mouseenter", function (e) {
    showWeek(e, "jul");
});

julButton.addEventListener("mouseleave", function () {
    setTimeout(function () {
        hideWeek("jul");
    }, 0);
});

julWeekDiv.addEventListener("mouseenter", function () {
    isWeekDivHovered = true;
});

julWeekDiv.addEventListener("mouseleave", function () {
    isWeekDivHovered = false;
    hideWeekTimeout = setTimeout(function () {
        hideWeek("jul");
    }, 0);
});

augButton.addEventListener("mouseenter", function (e) {
    showWeek(e, "aug");
});

augButton.addEventListener("mouseleave", function () {
    setTimeout(function () {
        hideWeek("aug");
    }, 0);
});

augWeekDiv.addEventListener("mouseenter", function () {
    isWeekDivHovered = true;
});

augWeekDiv.addEventListener("mouseleave", function () {
    isWeekDivHovered = false;
    hideWeekTimeout = setTimeout(function () {
        hideWeek("aug");
    }, 0);
});

sepButton.addEventListener("mouseenter", function (e) {
    showWeek(e, "sep");
});

sepButton.addEventListener("mouseleave", function () {
    setTimeout(function () {
        hideWeek("sep");
    }, 0);
});

sepWeekDiv.addEventListener("mouseenter", function () {
    isWeekDivHovered = true;
});

sepWeekDiv.addEventListener("mouseleave", function () {
    isWeekDivHovered = false;
    hideWeekTimeout = setTimeout(function () {
        hideWeek("sep");
    }, 0);
});


//看当前页面的状态
// const URL = window.location.href;

// const lastTwoDigits = URL.slice(-7, -5);

// console.log(lastTwoDigits);

// radioOptions = document.getElementsByName('radioOptions');
// radioOptions.forEach(function(option) {
//   if (option.value === lastTwoDigits) {
//     option.checked = true;
//   }
// });

// const urlLength = URL.length;
// console.log(urlLength);
// if(urlLength == 11){
//     const firstFourDigits = currentURL.substr(0, 4);

//     const leftLabels = document.querySelectorAll('.leftlabel');
//     leftLabels.forEach(function(label) {
//       if (label.textContent === firstFourDigits) {
//         label.classList.add('click');
//       }
//     });
// } else if(urlLength == 18){
//     const firstFourDigits = currentURL.substr(0, 4);
//     const sixToTenDigits = currentURL.substr(6, 11);
//     const leftLabels = document.querySelectorAll('.leftlabel');
//     leftLabels.forEach(function(label) {
//     if (label.textContent === firstFourDigits) {
//         label.classList.add('hover');
//     }
//     });
//     const weekDivButtons = document.querySelectorAll('.week-div button');
//     weekDivButtons.forEach(function(button) {
//     if (button.textContent === sixToTenDigits) {
//         button.classList.add('click2');
//     }
//     });
// }
