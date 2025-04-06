document.addEventListener('DOMContentLoaded', function() {
    // 模拟患者数据
    const patientData = {
        id: '10001',
        name: '王某某',
        age: 58,
        gender: '男',
        idNumber: '310***********1234',
        phone: '138****5678',
        address: '上海市浦东新区',
        economicStatus: '中等',
        lungFunction: {
            FEV1: 2.8,
            FVC: 3.5,
            PEF: 6.2,
            MVV: 85
        },
        bloodOxygen: 96,
        compliance: '良好',
        followups: [
            {
                date: '2025-03-15',
                doctor: '张医生',
                content: '患者情况稳定，继续当前治疗方案',
                medication: '沙美特罗/氟替卡松 50/250μg bid'
            },
            {
                date: '2025-02-10',
                doctor: '李医生',
                content: '患者主诉轻微气促，调整用药剂量',
                medication: '沙美特罗/氟替卡松 50/250μg bid + 孟鲁司特钠 10mg qn'
            }
        ]
    };

    // 渲染患者基本信息
    renderPatientInfo(patientData);
    
    // 初始化肺功能图表
    initLungFunctionChart(patientData.lungFunction);
    
    // 初始化随访记录表格
    initFollowupTable(patientData.followups);
    
    // 绑定发送消息事件
    document.getElementById('send-message-btn').addEventListener('click', sendMessage);
});

function renderPatientInfo(data) {
    document.getElementById('patient-name').textContent = data.name;
    document.getElementById('patient-age').textContent = data.age;
    document.getElementById('patient-gender').textContent = data.gender;
    document.getElementById('patient-id').textContent = data.idNumber;
    document.getElementById('patient-phone').textContent = data.phone;
    document.getElementById('patient-address').textContent = data.address;
    document.getElementById('economic-status').textContent = data.economicStatus;
    document.getElementById('blood-oxygen').textContent = data.bloodOxygen + '%';
    document.getElementById('compliance').textContent = data.compliance;
}

function initLungFunctionChart(data) {
    const ctx = document.getElementById('lung-function-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['FEV1(L)', 'FVC(L)', 'PEF(L/s)', 'MVV(L/min)'],
            datasets: [{
                label: '肺功能指标',
                data: [data.FEV1, data.FVC, data.PEF, data.MVV],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(139, 92, 246, 0.7)'
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(139, 92, 246, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function initFollowupTable(data) {
    const tbody = document.querySelector('#followup-table tbody');
    tbody.innerHTML = '';
    
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.doctor}</td>
            <td>${item.content}</td>
            <td>${item.medication}</td>
        `;
        tbody.appendChild(row);
    });
}

function sendMessage() {
    const message = document.getElementById('message-input').value.trim();
    if (message) {
        alert(`消息已发送给患者: ${message}`);
        document.getElementById('message-input').value = '';
    } else {
        alert('请输入消息内容');
    }
}
