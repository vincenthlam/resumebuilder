(function(){this.JST||(this.JST={}),this.JST["templates/github"]=function(e){e||(e={});var t,n=[],a=function(e){return e&&e.ecoSafe?e:"undefined"!=typeof e&&null!=e?h(e):""},i=e.safe,h=e.escape;return t=e.safe=function(e){if(e&&e.ecoSafe)return e;("undefined"==typeof e||null==e)&&(e="");var t=new String(e);return t.ecoSafe=!0,t},h||(h=e.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){(function(){var e;e=new Date(this.created_at).getTime(),n.push('\n\n<li class="timeline-list-item timeline-github" data-time="'),n.push(a(e)),n.push('">\n  <header>\n    <label class="date">'),n.push(a(moment(e).format("DD MMMM YYYY"))),n.push('</label>\n    <h1 class="icon-github">\n      <a href="http://github.com/'),n.push(a(this.repo.name)),n.push('">Github</a>\n    </h1>\n  </header>\n  <article>\n    <a href="'),n.push(a(this.actor.url)),n.push('">'),n.push(a(this.actor.login)),n.push('</a> pushed to <a href="http://github.com/'),n.push(a(this.repo.name)),n.push('">'),n.push(a(this.repo.name)),n.push("</a>\n  </article>\n\n</li>\n")}).call(this)}.call(e),e.safe=i,e.escape=h,n.join("")}}).call(this);