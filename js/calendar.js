document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        locale: 'zh-cn',
        buttonText: {
            today: '今天',
            month: '月',
            week: '周',
            day: '日'
        },
        events: [
            {
                title: '王某某随访',
                start: new Date(),
                color: '#3B82F6',
                extendedProps: {
                    patientId: '10001',
                    type: '随访'
                }
            },
            {
                title: '李某某复查',
                start: new Date(new Date().setDate(new Date().getDate() + 2)),
                color: '#10B981',
                extendedProps: {
                    patientId: '10002',
                    type: '复查'
                }
            },
            {
                title: '张某某随访',
                start: new Date(new Date().setDate(new Date().getDate() + 5)),
                color: '#3B82F6',
                extendedProps: {
                    patientId: '10003',
                    type: '随访'
                }
            }
        ],
        eventClick: function(info) {
            const event = info.event;
            alert(`即将开始: ${event.title}\n患者ID: ${event.extendedProps.patientId}\n类型: ${event.extendedProps.type}`);
        }
    });

    calendar.render();

    // 响应式调整
    window.addEventListener('resize', function() {
        calendar.updateSize();
    });
});
