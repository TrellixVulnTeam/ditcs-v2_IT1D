var res = {'data':'HTTP/1.1 200 OK\x0aDate: Sun, 01 Aug 2021 15:10:25 GMT\x0aServer: WSGIServer/0.2 CPython/3.9.2\x0aContent-Type: application/javascript\x0aContent-Length: 2608\x0aContent-Disposition: inline; filename=\x22jquery.bootstrap.modal.forms.min.js\x22\x0aLast-Modified: Sat, 31 Jul 2021 15:53:01 GMT\x0a\x0a!function(o){var a=function(a){o(a.modalForm).on(\x22submit\x22,function(o){if(void 0!==o.originalEvent&&!1===a.isDeleteForm)return o.preventDefault(),n(a,t),!1}),o(a.modalID).on(\x22hidden.bs.modal\x22,function(n){o(a.modalForm).remove()})},n=function(n,t){o.ajax({type:o(n.modalForm).attr(\x22method\x22),url:o(n.modalForm).attr(\x22action\x22),data:new FormData(o(n.modalForm)[0]),contentType:!1,processData:!1,beforeSend:function(){o(n.submitBtn).prop(\x22disabled\x22,!0)},success:function(e){o(e).find(n.errorClass).length\x3e0?(o(n.modalID).find(n.modalContent).html(e),o(n.modalForm).attr(\x22action\x22,n.formURL),a(n)):t(n)}})},t=function(n){if(n.asyncUpdate){if(e(n.asyncSettings)){var t=n.asyncSettings,s=new FormData(o(n.modalForm)[0]);s.append(\x22asyncUpdate\x22,\x22True\x22),o.ajax({type:o(n.modalForm).attr(\x22method\x22),url:o(n.modalForm).attr(\x22action\x22),data:s,contentType:!1,processData:!1,success:function(e){var s=o(\x22body\x22);0===s.length&&console.error(\x22django-bootstrap-modal-forms: \x3cbody\x3e element missing in your html.\x22),s.prepend(t.successMessage),o.ajax({type:\x22GET\x22,url:t.dataUrl,dataType:\x22json\x22,success:function(e){o(t.dataElementId).html(e[t.dataKey]),t.addModalFormFunction&&t.addModalFormFunction(),t.closeOnSubmit?o(n.modalID).modal(\x22hide\x22):o(n.modalID).find(n.modalContent).load(n.formURL,function(){o(n.modalForm).attr(\x22action\x22,n.formURL),a(n)})}})}})}}else o(n.modalForm).submit()},e=function(o){var a=[];return o.successMessage||(a.push(\x22successMessage\x22),console.error(\x22django-bootstrap-modal-forms: \x27successMessage\x27 in asyncSettings is missing.\x22)),o.dataUrl||(a.push(\x22dataUrl\x22),console.error(\x22django-bootstrap-modal-forms: \x27dataUrl\x27 in asyncSettings is missing.\x22)),o.dataElementId||(a.push(\x22dataElementId\x22),console.error(\x22django-bootstrap-modal-forms: \x27dataElementId\x27 in asyncSettings is missing.\x22)),o.dataKey||(a.push(\x22dataKey\x22),console.error(\x22django-bootstrap-modal-forms: \x27dataKey\x27 in asyncSettings is missing.\x22)),o.addModalFormFunction||(a.push(\x22addModalFormFunction\x22),console.error(\x22django-bootstrap-modal-forms: \x27addModalFormFunction\x27 in asyncSettings is missing.\x22)),!(a.length\x3e0)};o.fn.modalForm=function(n){var t=o.extend({modalID:\x22#modal\x22,modalContent:\x22.modal-content\x22,modalForm:\x22.modal-content form\x22,formURL:null,isDeleteForm:!1,errorClass:\x22.invalid\x22,asyncUpdate:!1,asyncSettings:{closeOnSubmit:!1,successMessage:null,dataUrl:null,dataElementId:null,dataKey:null,addModalFormFunction:null}},n);return this.each(function(){o(this).click(function(n){!function(n){o(n.modalID).find(n.modalContent).load(n.formURL,function(){o(n.modalID).modal(\x22show\x22),o(n.modalForm).attr(\x22action\x22,n.formURL),a(n)})}(t)})}),this}}(jQuery);m;!'}