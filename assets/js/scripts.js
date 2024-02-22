function toggleContent(recipeNumber) {
    const content = document.getElementById(`content${recipeNumber}`);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}