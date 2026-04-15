export const getComponentLabel = (componentKey) =>
  componentKey.charAt(0).toUpperCase() + componentKey.slice(1);

export const formatDate = (value) => {
  if (!value) {
    return 'Not set';
  }

  return new Date(value).toLocaleDateString();
};

