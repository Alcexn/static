var loadinghome = layer.load(2);
        window.addEventListener('load', function() {
            layer.close(loadinghome);
        });
function isDesktop() {
            return !(/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        }

document.addEventListener('DOMContentLoaded', function() {
            var button = document.getElementById('expire');
            if (isDesktop()) {
                // 创建图标元素
                var icon = document.createElement('i');
                icon.className = 'fa fa-heart text-danger';

                // 创建文本节点
                var textNode = document.createTextNode(' 赞助(Buy me a coffee)');

                // 清空按钮内容
                button.innerHTML = '';

                // 将图标和文本添加到按钮中
                button.appendChild(icon);
                button.appendChild(textNode);
            }
        });
        document.addEventListener('DOMContentLoaded', function() {
            var button = document.getElementById('links');
            if (!isDesktop()) {
                button.style.display = 'none';
            }
        });
fetch('https://' + window.location.hostname + '/pages/api/expire.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('网络错误 ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // 定义目标日期
        const targetDate = new Date(data.data);
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        const enddaysElement = document.getElementById('enddays');
        enddaysElement.textContent = daysDifference;
        console.log(`服务器距到期还有 ${daysDifference} 天`);
        app.$notify({
          title: '求赞助~喵',
          message: `本站站长是初三学生,服务器<b>20元/月</b>,续费比较有压力,可否赞助小站~本站服务器距到期还有 <b>${daysDifference}</b> 天,在下感激不尽!<i class="fa fa-heart text-danger"></i><br><a class="Developer" onclick="$('#modal-lg').modal('show');" target="_blank">点我捐赠</a>`,
          dangerouslyUseHTMLString: true,
          type: 'warning',
          offset: 70,
          duration: 0
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

