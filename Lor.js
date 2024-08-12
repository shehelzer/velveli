// Assume isFieldDef is a utility function defined elsewhere
function isFieldDef(obj) {
  return obj && obj.hasOwnProperty('field');
}

// Example field definition
const fieldOrDatumDef = {
  field: 'date',
  timeUnit: 'yearmonth'
};

// Constructing an object with various properties including timeUnit
const config = {
  field: fieldOrDatumDef.field,
  type: 'temporal',
  timeUnit: isFieldDef(fieldOrDatumDef) ? fieldOrDatumDef.timeUnit : undefined,
};

console.log(config);
// Output: { field: 'date', type: 'temporal', timeUnit: 'yearmonth' }
