const textArea = document.getElementById('review-text');
const resenhaContent = document.getElementById('resenha-content');
const savedReview = localStorage.getItem('resenhaUltimoOlimpiano');

if (savedReview) {
  textArea.value = savedReview;
  resenhaContent.innerHTML = savedReview;
} else {
  textArea.value = 'Digite sua resenha aqui...';
}

document.getElementById('edit-btn').addEventListener('click', () => {
  textArea.focus();
});

document.getElementById('save-btn').addEventListener('click', () => {
  const newReview = textArea.value;
  localStorage.setItem('resenhaUltimoOlimpiano', newReview);
  resenhaContent.innerHTML = newReview;
  alert('Resenha salva com sucesso!');
});
