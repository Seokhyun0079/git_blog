function addClassToImages(processedContent) {
  try {
    const tempContentContainer = document.createElement("div");
    tempContentContainer.innerHTML = processedContent;
    const contentImages = tempContentContainer.querySelectorAll("img");
    contentImages.forEach((img) => img.classList.add("preivew-image"));
    processedContent = tempContentContainer.innerHTML;
  } catch (e) {
    // No-op: if parsing fails, fallback to original content
  } finally {
    return processedContent;
  }
}
