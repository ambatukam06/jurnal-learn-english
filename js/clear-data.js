document.addEventListener('DOMContentLoaded',()=>{
  const pageMap={
    learning:'learning',vocab:'vocab',speaking:'speaking',listening:'listening',knowledge:'knowledge',mistakes:'mistakes',resources:'resources',goals:'goals',review:'review',calendar:'calendar',analytics:'analytics',reflections:'reflections'
  };
  const addButton=(pageId)=>{
    const page=document.getElementById('page-'+pageId);
    if(!page)return;
    const head=page.querySelector('.head');
    if(!head || head.querySelector('[data-clear-page]'))return;
    const b=document.createElement('button');
    b.type='button'; b.className='secondary clear-data-btn'; b.dataset.clearPage=pageId; b.textContent='Clear data';
    head.appendChild(b);
  };
  Object.values(pageMap).forEach(addButton);

  document.querySelectorAll('[data-clear-page]').forEach(btn=>{
    btn.onclick=(e)=>{
      e.preventDefault();
      const pageId=btn.dataset.clearPage;
      if(typeof openClearModal==='function') openClearModal(pageId);
      else if(typeof say==='function') say('Clear data is loading. Please try again.');
    };
  });

  const filterBtn=document.getElementById('clearFilters');
  if(filterBtn){
    filterBtn.textContent='Clear filters';
    filterBtn.onclick=()=>{
      const skill=document.getElementById('learningSkillFilter');
      const source=document.getElementById('learningSourceFilter');
      if(skill)skill.value='all';
      if(source)source.value='all';
      if(typeof renderLearning==='function')renderLearning();
      if(typeof say==='function')say('Learning filters cleared.');
    };
  }
});