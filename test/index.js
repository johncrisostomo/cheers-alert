var expect = require("chai").expect;
var cheers = require('../src/index.js');

var jsdom = require('jsdom').jsdom;
var document = jsdom('<div/');
var window = document.defaultView;
var $ = jQuery = require('jquery')(window);

function check( done, f ) {
  try {
    f();
    done();
  } catch( e ) {
    done( e );
  }
};

describe("cheers-alert notification", function() {
  beforeEach(function() {
     global.$ = $;
  });
  afterEach(function() {
    $('body').empty();
  });

  it("should create success notification", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });


    expect($('.cheers-holder').attr('class')).to.contain('cheers-holder slideleft success');
  });

  it("should create error notification", function() {
    cheers.error({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('cheers-holder slideleft error');
  });

  it("should create warning notification", function() {
    cheers.warning({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('cheers-holder slideleft warning');
  });

  it("should create info notification", function() {
    cheers.info({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('cheers-holder slideleft info');
  });
});


describe("cheers-alert properties", function() {
  beforeEach(function() {
     global.$ = $;
  });
  afterEach(function() {
    $('body').empty();
  });

  it("should set title", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-title').html()).to.contain('Warning');
  });

  it("should set message", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });


    expect($('.cheers-body').html()).to.contain('Validation error');
  });

  it("should set default alert", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('fadein');
  });

  it("should set alert", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-holder').attr('class')).to.contain('slideleft');
  });

  it("should set default success icon", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
    });

    expect($('.cheers-icon').html()).to.contain('fa-check');
  });

  it("should set default error icon", function() {
    cheers.error({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
    });

    expect($('.cheers-icon').html()).to.contain('fa-times');
  });

  it("should set default warning icon", function() {
    cheers.warning({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
    });

    expect($('.cheers-icon').html()).to.contain('fa-exclamation');
  });

  it("should set default info icon", function() {
    cheers.info({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
    });

    expect($('.cheers-icon').html()).to.contain('fa-info');
  });

  it("should set icon", function() {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    expect($('.cheers-icon').html()).to.contain('fa-user');
  });
});

describe("cheers-alert functionalities", function() {
  beforeEach(function() {
     global.$ = $;
  });
  afterEach(function() {
    $('body').empty();
  });

  it("should dismiss after 4-5s", function(done) {
    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    this.timeout(6000);
    setTimeout(function() {
      check( done, function() {
        // expect($('body').html().length).to.equal(0);
      } );
    }, 5000);
  });

  it("should dismiss after set secs", function(done) {
    cheers.setDuration(3);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    this.timeout(5000);
    setTimeout(function() {
      check( done, function() {
        // expect($('body').html().length).to.equal(0);
      } );
    }, 4000);
  });

  it("should set setToggle", function(done) {
    cheers.setToggle(true);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    this.timeout(6000);
    setTimeout(function() {
      check( done, function() {
        // expect($('body').html().length).to.equal(0);
      } );
    }, 5000);
  });

  it("should dismiss onClick", function(done) {
    cheers.setToggle(true);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    $('.cheers-holder').trigger('click');

    this.timeout(4000);
    setTimeout(function() {
      check( done, function() {
        expect($('body').html().length).to.equal(0);
      } );
    }, 3000);
  });

  it("should have these css", function() {
    cheers.setToggle(true);

    cheers.success({
      title: 'Warning',
      message: 'Validation error',
      alert: 'slideleft',
      icon: 'fa-user',
    });

    $('.cheers-holder').trigger('click');

    expect($('.cheers-holder').attr('style')).to.contain('background: transparent;');
    expect($('.cheers-icon').attr('style')).to.contain('background: transparent;');
  });
});
