window.addEventListener('load', function () {
    var loader = document.getElementById('loader');

    setTimeout(function () {
        loader.style.display = 'none';
    }, 2000);
});

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
        // 如果当前按钮执行了点击事件，就让盒子不要收回
         // 为对应的leftlabel标签添加highlighted类名
        for (const label of leftlabelButtons) {
            // 获取左侧标签的文本内容
            var labelValue = label.innerHTML.trim();
            // 如果按钮的文本内容和左侧标签的文本内容相同，则添加highlighted类名
            if (labelValue === buttonValue) {
            label.classList.add('highlighted');
            }
        }
        // 保持week-div盒子的显示状态
        var weekDiv = button.parentElement;
        weekDiv.style.display = 'block';

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

    weekDiv.style.left = buttonRect.left + 0 + "px";
    weekDiv.style.top = viewportOffset + buttonRect.height + 15 + "px";
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

    weekDiv.addEventListener("mouseleave", function() {
        isWeekDivHovered = false;
        hideWeekTimeout = setTimeout(function() {
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

// // 获取按钮和单选框的元素
// const leftlabelButtons = document.getElementsByClassName('leftlabel');
// const buttons = document.getElementsByClassName('week-div-button');
// var radioOptions = document.getElementsByName('radioOptions');

// // 记录按钮点击状态、所选按钮的值和单选框选择状态
// var buttonClicked = false;
// var selectedWeekValue = '';
// var selectedMonthValue = '';
// var radioOptionSelected = false;
// // 声明按钮全局变量
// let selectedOption = '';

// // 监听月份的：hover
// for (const button of leftlabelButtons) {
//   button.addEventListener('mouseenter', function (event) {
//     // 获取月份按钮文字值
//     var buttonValue = button.innerHTML.trim();
//     selectedMonthValue = buttonValue;
//   });
// }

// // 监听按钮的点击事件
// for (const button of buttons) {
//   button.addEventListener('click', function (event) {
//     // 获取周数按钮文字值
//     var buttonValue = button.innerHTML.trim();
//     selectedWeekValue = buttonValue;

//     // 更新按钮点击状态
//     buttonClicked = true;

//     // 如果单选框已选择，则进行页面跳转
//     if (
//       radioOptionSelected &&
//       selectedWeekValue &&
//       selectedMonthValue &&
//       getSelectedOption() !== '' &&
//       getSelectedOption() == 'Wl'
//     ) {
//       var url =
//         './' + selectedMonthValue + '&' + selectedWeekValue + '&' + getSelectedOption() + '.html';
//       window.location.href = url;
//     } else if (
//       radioOptionSelected &&
//       selectedMonthValue &&
//       getSelectedOption() !== '' &&
//       getSelectedOption() == 'Dl'
//     ) {
//       var url = './' + selectedMonthValue + '&' + getSelectedOption() + '.html';
//       window.location.href = url;
//     }
//   });
// }

// // 监听单选框的改变事件
// radioOptions.forEach(function (option) {
//   option.addEventListener('change', function () {
//     // 更新单选框选择状态
//     radioOptionSelected = true;

//     // 如果按钮已点击且存在按钮值，则进行页面跳转
//     if (
//       buttonClicked &&
//       selectedWeekValue &&
//       selectedMonthValue &&
//       getSelectedOption() == 'Wl'
//     ) {
//       var url =
//         './' + selectedMonthValue + '&' + selectedWeekValue + '&' + getSelectedOption() + '.html';
//       window.location.href = url;
//     } else if (selectedWeekValue && selectedMonthValue && getSelectedOption() == 'Dl') {
//       var url = './' + selectedMonthValue + '&' + getSelectedOption() + '.html';
//       window.location.href = url;
//     }
//   });
// });

// // 获取选中的单选框的值
// function getSelectedOption() {
//   var selectedValue = '';
//   radioOptions.forEach(function (option) {
//     if (option.checked) {
//       selectedValue = option.value;
//     }
//   });
//   return selectedValue;
// }

// // 在第一行添加以下变量
// var isWeekDivHovered = false;
// var hideWeekTimeout;

// var julButton = document.getElementById('julButton');
// var julWeekDiv = document.getElementById('julWeekDiv');
// var augButton = document.getElementById('augButton');
// var augWeekDiv = document.getElementById('augWeekDiv');
// var sepButton = document.getElementById('sepButton');
// var sepWeekDiv = document.getElementById('sepWeekDiv');
// var isWeekDivHovered = false;
// var hideWeekTimeout;
// var selectedWeekButton = null; // 用于记录选中的周数按钮

// function showWeek(e, month) {
//   var weekDiv = document.getElementById(month + 'WeekDiv');
//   var buttonRect = e.target.getBoundingClientRect();
//   var viewportOffset = buttonRect.top + window.pageYOffset;

//   weekDiv.style.left = buttonRect.left + 0 + 'px';
//   weekDiv.style.top = viewportOffset + buttonRect.height + 15 + 'px';
//   weekDiv.style.display = 'block';

//   // 隐藏其他按钮的放大效果
//   julButton.classList.remove('highlighted');
//   augButton.classList.remove('highlighted');
//   sepButton.classList.remove('highlighted');

//   // 为当前按钮添加放大效果
//   e.target.classList.add('highlighted');

//   // 记录选中的周数按钮
//   selectedWeekButton = e.target;
// }

// function hideWeek(month) {
//   var weekDiv = document.getElementById(month + 'WeekDiv');
//   if (isWeekDivHovered) return;
//   weekDiv.style.display = 'none';
//   julButton.classList.remove('highlighted');
//   augButton.classList.remove('highlighted');
//   sepButton.classList.remove('highlighted');
// }

// julButton.addEventListener('mouseenter', function (e) {
//   showWeek(e, 'jul');
// });

// julButton.addEventListener('mouseleave', function () {
//   setTimeout(function () {
//     if (!selectedWeekButton) {
//       hideWeek('jul');
//     }
//   }, 200);
// });

// julWeekDiv.addEventListener('mouseenter', function () {
//   isWeekDivHovered = true;
// });

// julWeekDiv.addEventListener('mouseleave', function () {
//   isWeekDivHovered = false;
//   hideWeekTimeout = setTimeout(function () {
//     if (!isWeekDivHovered && !selectedWeekButton) {
//       hideWeek('jul');
//     }
//   }, 200);
// });

// augButton.addEventListener('mouseenter', function (e) {
//   showWeek(e, 'aug');
// });

// augButton.addEventListener('mouseleave', function () {
//   setTimeout(function () {
//     if (!selectedWeekButton) {
//       hideWeek('aug');
//     }
//   }, 200);
// });

// augWeekDiv.addEventListener('mouseenter', function () {
//   isWeekDivHovered = true;
// });

// augWeekDiv.addEventListener('mouseleave', function () {
//   isWeekDivHovered = false;
//   hideWeekTimeout = setTimeout(function () {
//     if (!isWeekDivHovered && !selectedWeekButton) {
//       hideWeek('aug');
//     }
//   }, 200);
// });

// sepButton.addEventListener('mouseenter', function (e) {
//   showWeek(e, 'sep');
// });

// sepButton.addEventListener('mouseleave', function () {
//   setTimeout(function () {
//     if (!selectedWeekButton) {
//       hideWeek('sep');
//     }
//   }, 0);
// });

// sepWeekDiv.addEventListener('mouseenter', function () {
//   isWeekDivHovered = true;
// });

// sepWeekDiv.addEventListener('mouseleave', function () {
//   isWeekDivHovered = false;
//   hideWeekTimeout = setTimeout(function () {
//     if (!isWeekDivHovered && !selectedWeekButton) {
//       hideWeek('sep');
//     }
//   }, 200);
// });

// // 监听选中的按钮，添加.click属性
// for (const button of buttons) {
//   button.addEventListener('click', function (event) {
//     // 获取周数按钮文字值
//     var buttonValue = button.innerHTML.trim();
//     selectedWeekValue = buttonValue;

//     // 更新按钮点击状态
//     buttonClicked = true;

//     // 添加.click属性
//     if (selectedWeekButton) {
//       selectedWeekButton.classList.remove('click2');
//     }
//     button.classList.add('click2');

//     // 如果单选框已选择，则进行页面跳转
//     if (
//       radioOptionSelected &&
//       selectedWeekValue &&
//       selectedMonthValue &&
//       getSelectedOption() !== '' &&
//       getSelectedOption() == 'Wl'
//     ) {
//       var url =
//         './' + selectedMonthValue + '&' + selectedWeekValue + '&' + getSelectedOption() + '.html';
//       window.location.href = url;
//     } else if (
//       radioOptionSelected &&
//       selectedMonthValue &&
//       getSelectedOption() !== '' &&
//       getSelectedOption() == 'Dl'
//     ) {
//       var url = './' + selectedMonthValue + '&' + getSelectedOption() + '.html';
//       window.location.href = url;
//     }
//   });
// }
