webpackHotUpdate(3,{

/***/ "./node_modules/global/window.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/material-ui/AppBar/AppBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];

  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box', // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionSticky: {
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionStatic: {
      position: 'static'
    },
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  };
};

function AppBar(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      position = props.position,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'color', 'position']);


  var className = (0, _classnames2.default)(classes.root, classes['position' + (0, _helpers.capitalize)(position)], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes['color' + (0, _helpers.capitalize)(color)], color !== 'inherit'), (0, _defineProperty3.default)(_classNames, 'mui-fixed', position === 'fixed'), _classNames), classNameProp);

  return _react2.default.createElement(
    _Paper2.default,
    (0, _extends3.default)({ square: true, component: 'header', elevation: 4, className: className }, other),
    children
  );
}

AppBar.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['inherit', 'primary', 'secondary', 'default']),
  /**
   * The positioning type. The behavior of the different options is described
   * [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: _propTypes2.default.oneOf(['fixed', 'absolute', 'sticky', 'static'])
} : {};

AppBar.defaultProps = {
  color: 'primary',
  position: 'fixed'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiAppBar' })(AppBar);

/***/ }),

/***/ "./node_modules/material-ui/AppBar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppBar = __webpack_require__("./node_modules/material-ui/AppBar/AppBar.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AppBar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Avatar/Avatar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: theme.spacing.unit * 5,
      height: theme.spacing.unit * 5,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none'
    },
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },
    img: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      // Handle non-square image. The property isn't supported by IE11.
      objectFit: 'cover'
    }
  };
};

function Avatar(props) {
  var alt = props.alt,
      childrenProp = props.children,
      childrenClassNameProp = props.childrenClassName,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      imgProps = props.imgProps,
      sizes = props.sizes,
      src = props.src,
      srcSet = props.srcSet,
      other = (0, _objectWithoutProperties3.default)(props, ['alt', 'children', 'childrenClassName', 'classes', 'className', 'component', 'imgProps', 'sizes', 'src', 'srcSet']);


  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.colorDefault, childrenProp && !src && !srcSet), classNameProp);
  var children = null;

  if (childrenProp) {
    if (childrenClassNameProp && typeof childrenProp !== 'string' && _react2.default.isValidElement(childrenProp)) {
      var childrenClassName = (0, _classnames2.default)(childrenClassNameProp, childrenProp.props.className);
      children = _react2.default.cloneElement(childrenProp, { className: childrenClassName });
    } else {
      children = childrenProp;
    }
  } else if (src || srcSet) {
    children = _react2.default.createElement('img', (0, _extends3.default)({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    }, imgProps));
  }

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

Avatar.propTypes =  true ? {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: _propTypes2.default.string,
  /**
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   * The className of the child element.
   * Used by Chip and ListItemIcon to style the Avatar icon.
   */
  childrenClassName: _propTypes2.default.string,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Properties applied to the `img` element when the component
   * is used to display an image.
   */
  imgProps: _propTypes2.default.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: _propTypes2.default.string,
  /**
   * The `src` attribute for the `img` element.
   */
  src: _propTypes2.default.string,
  /**
   * The `srcSet` attribute for the `img` element.
   */
  srcSet: _propTypes2.default.string
} : {};

Avatar.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiAvatar' })(Avatar);

/***/ }),

/***/ "./node_modules/material-ui/Avatar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Avatar = __webpack_require__("./node_modules/material-ui/Avatar/Avatar.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Avatar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Badge/Badge.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RADIUS = 12;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      display: 'inline-flex',
      // For correct alignment with the text.
      verticalAlign: 'middle'
    },
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: -RADIUS,
      right: -RADIUS,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      fontSize: theme.typography.pxToRem(RADIUS),
      width: RADIUS * 2,
      height: RADIUS * 2,
      borderRadius: '50%',
      backgroundColor: theme.palette.color,
      color: theme.palette.textColor,
      zIndex: 1 // Render the badge on top of potential ripples.
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    colorError: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText
    }
  };
};

function Badge(props) {
  var badgeContent = props.badgeContent,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      ComponentProp = props.component,
      other = (0, _objectWithoutProperties3.default)(props, ['badgeContent', 'children', 'classes', 'className', 'color', 'component']);


  var badgeClassName = (0, _classnames2.default)(classes.badge, (0, _defineProperty3.default)({}, classes['color' + (0, _helpers.capitalize)(color)], color !== 'default'));

  return _react2.default.createElement(
    ComponentProp,
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
    children,
    _react2.default.createElement(
      'span',
      { className: badgeClassName },
      badgeContent
    )
  );
}

Badge.propTypes =  true ? {
  /**
   * The content rendered within the badge.
   */
  badgeContent: _propTypes2.default.node.isRequired,
  /**
   * The badge will be added relative to this node.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['default', 'primary', 'secondary', 'error']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
} : {};

Badge.defaultProps = {
  color: 'default',
  component: 'span'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBadge' })(Badge);

/***/ }),

/***/ "./node_modules/material-ui/Badge/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Badge = __webpack_require__("./node_modules/material-ui/Badge/Badge.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Badge).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/BottomNavigation/BottomNavigation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: 56,
      backgroundColor: theme.palette.background.paper
    }
  };
};

function BottomNavigation(props) {
  var childrenProp = props.children,
      classes = props.classes,
      classNameProp = props.className,
      onChange = props.onChange,
      showLabels = props.showLabels,
      value = props.value,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'onChange', 'showLabels', 'value']);


  var className = (0, _classnames2.default)(classes.root, classNameProp);

  var children = _react2.default.Children.map(childrenProp, function (child, childIndex) {
    if (!_react2.default.isValidElement(child)) {
      return null;
    }

    var childValue = child.props.value || childIndex;
    return _react2.default.cloneElement(child, {
      selected: childValue === value,
      showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabels,
      value: childValue,
      onChange: onChange
    });
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

BottomNavigation.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child
   */
  onChange: _propTypes2.default.func,
  /**
   * If `true`, all `BottomNavigationAction`s will show their labels.
   * By default, only the selected `BottomNavigationAction` will show its label.
   */
  showLabels: _propTypes2.default.bool,
  /**
   * The value of the currently selected `BottomNavigationAction`.
   */
  value: _propTypes2.default.any
} : {};

BottomNavigation.defaultProps = {
  showLabels: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBottomNavigation' })(BottomNavigation);

/***/ }),

/***/ "./node_modules/material-ui/BottomNavigation/BottomNavigationAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__("./node_modules/material-ui/ButtonBase/index.js");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      transition: theme.transitions.create(['color', 'padding-top'], {
        duration: theme.transitions.duration.short
      }),
      paddingTop: theme.spacing.unit,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      minWidth: 80,
      maxWidth: 168,
      color: theme.palette.text.secondary,
      flex: '1'
    },
    selected: {
      paddingTop: 6,
      color: theme.palette.primary.main
    },
    selectedIconOnly: {
      paddingTop: theme.spacing.unit * 2
    },
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(theme.typography.fontSize - 2),
      opacity: 1,
      transition: 'font-size 0.2s, opacity 0.2s',
      transitionDelay: '0.1s'
    },
    selectedLabel: {
      fontSize: theme.typography.pxToRem(theme.typography.fontSize)
    },
    hiddenLabel: {
      opacity: 0,
      transitionDelay: '0s'
    }
  };
}; // @inheritedComponent ButtonBase

var BottomNavigationAction = function (_React$Component) {
  (0, _inherits3.default)(BottomNavigationAction, _React$Component);

  function BottomNavigationAction() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BottomNavigationAction);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BottomNavigationAction.__proto__ || (0, _getPrototypeOf2.default)(BottomNavigationAction)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          onClick = _this$props.onClick;


      if (onChange) {
        onChange(event, value);
      }

      if (onClick) {
        onClick(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BottomNavigationAction, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          icon = _props.icon,
          label = _props.label,
          onChange = _props.onChange,
          onClick = _props.onClick,
          selected = _props.selected,
          showLabelProp = _props.showLabel,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'icon', 'label', 'onChange', 'onClick', 'selected', 'showLabel', 'value']);


      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.selected, selected), (0, _defineProperty3.default)(_classNames, classes.selectedIconOnly, !showLabelProp && !selected), _classNames), classNameProp);

      var labelClassName = (0, _classnames2.default)(classes.label, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.selectedLabel, selected), (0, _defineProperty3.default)(_classNames2, classes.hiddenLabel, !showLabelProp && !selected), _classNames2));

      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends3.default)({ className: className, focusRipple: true, onClick: this.handleChange }, other),
        _react2.default.createElement(
          'span',
          { className: classes.wrapper },
          icon,
          _react2.default.createElement(
            'span',
            { className: labelClassName },
            label
          )
        )
      );
    }
  }]);
  return BottomNavigationAction;
}(_react2.default.Component);

BottomNavigationAction.propTypes =  true ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The icon element.
   */
  icon: _propTypes2.default.node,
  /**
   * The label element.
   */
  label: _propTypes2.default.node,
  /**
   * @ignore
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   */
  selected: _propTypes2.default.bool,
  /**
   * If `true`, the BottomNavigationAction will show its label.
   */
  showLabel: _propTypes2.default.bool,
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: _propTypes2.default.any
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBottomNavigationAction' })(BottomNavigationAction);

/***/ }),

/***/ "./node_modules/material-ui/BottomNavigation/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BottomNavigation = __webpack_require__("./node_modules/material-ui/BottomNavigation/BottomNavigation.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BottomNavigation).default;
  }
});

var _BottomNavigationAction = __webpack_require__("./node_modules/material-ui/BottomNavigation/BottomNavigationAction.js");

Object.defineProperty(exports, 'BottomNavigationAction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BottomNavigationAction).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Button/Button.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _colorManipulator = __webpack_require__("./node_modules/material-ui/styles/colorManipulator.js");

var _ButtonBase = __webpack_require__("./node_modules/material-ui/ButtonBase/index.js");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

var _reactHelpers = __webpack_require__("./node_modules/material-ui/utils/reactHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent ButtonBase

var styles = exports.styles = function styles(theme) {
  return {
    root: (0, _extends3.default)({}, theme.typography.button, {
      lineHeight: '1.4em', // Improve readability for multiline button.
      boxSizing: 'border-box',
      minWidth: theme.spacing.unit * 11,
      minHeight: 36,
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 2 + 'px',
      borderRadius: 2,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        // Reset on mouse devices
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.text.primary, 0.12),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      }
    }),
    label: {
      width: '100%',
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    flatPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, 0.12),
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    flatSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, 0.12),
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    colorInherit: {
      color: 'inherit'
    },
    raised: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&$keyboardFocused': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      }
    },
    keyboardFocused: {},
    raisedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    raisedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    disabled: {
      color: theme.palette.action.disabled
    },
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      fontSize: 24,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      }
    },
    mini: {
      width: 40,
      height: 40
    },
    sizeSmall: {
      padding: theme.spacing.unit - 1 + 'px ' + theme.spacing.unit + 'px',
      minWidth: theme.spacing.unit * 8,
      minHeight: 32,
      fontSize: theme.typography.pxToRem(theme.typography.fontSize - 1)
    },
    sizeLarge: {
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 3 + 'px',
      minWidth: theme.spacing.unit * 14,
      minHeight: 40,
      fontSize: theme.typography.pxToRem(theme.typography.fontSize + 1)
    },
    fullWidth: {
      width: '100%'
    }
  };
};

function Button(props) {
  var _classNames;

  var childrenProp = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      disabled = props.disabled,
      disableFocusRipple = props.disableFocusRipple,
      fullWidth = props.fullWidth,
      mini = props.mini,
      size = props.size,
      variant = props.variant,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'color', 'disabled', 'disableFocusRipple', 'fullWidth', 'mini', 'size', 'variant']);


  var fab = variant === 'fab';
  var raised = variant === 'raised';
  var flat = !raised && !fab;
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.raised, raised || fab), (0, _defineProperty3.default)(_classNames, classes.fab, fab), (0, _defineProperty3.default)(_classNames, classes.mini, fab && mini), (0, _defineProperty3.default)(_classNames, classes.colorInherit, color === 'inherit'), (0, _defineProperty3.default)(_classNames, classes.flatPrimary, flat && color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.flatSecondary, flat && color === 'secondary'), (0, _defineProperty3.default)(_classNames, classes.raisedPrimary, !flat && color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.raisedSecondary, !flat && color === 'secondary'), (0, _defineProperty3.default)(_classNames, classes['size' + (0, _helpers.capitalize)(size)], size !== 'medium'), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.fullWidth, fullWidth), _classNames), classNameProp);

  var children = childrenProp;

  if (fab) {
    children = _react2.default.Children.map(children, function (child) {
      if ((0, _reactHelpers.isMuiElement)(child, ['Icon', 'SvgIcon'])) {
        return _react2.default.cloneElement(child, { fontSize: true });
      }
      return child;
    });
  }

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({
      className: className,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      keyboardFocusedClassName: classes.keyboardFocused
    }, other),
    _react2.default.createElement(
      'span',
      { className: classes.label },
      children
    )
  );
}

Button.propTypes =  true ? {
  /**
   * The content of the button.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * The default value is a `button`.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: _propTypes2.default.string,
  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: _propTypes2.default.bool,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  /**
   * @ignore
   */
  type: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  variant: _propTypes2.default.oneOf(['flat', 'raised', 'fab'])
} : {};

Button.defaultProps = {
  color: 'default',
  disabled: false,
  disableFocusRipple: false,
  disableRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'flat'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiButton' })(Button);

/***/ }),

/***/ "./node_modules/material-ui/Button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__("./node_modules/material-ui/Button/Button.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Button).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Card/Card.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(props) {
  var raised = props.raised,
      other = (0, _objectWithoutProperties3.default)(props, ['raised']);


  return _react2.default.createElement(_Paper2.default, (0, _extends3.default)({ elevation: raised ? 8 : 2 }, other));
} // @inheritedComponent Paper

Card.propTypes =  true ? {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: _propTypes2.default.bool
} : {};

Card.defaultProps = {
  raised: false
};

exports.default = Card;

/***/ }),

/***/ "./node_modules/material-ui/Card/CardActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactHelpers = __webpack_require__("./node_modules/material-ui/utils/reactHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  root: {
    height: 52,
    display: 'flex',
    alignItems: 'center',
    padding: '2px 4px',
    boxSizing: 'border-box'
  },
  action: {
    margin: '0 4px'
  }
};

function CardActions(props) {
  var disableActionSpacing = props.disableActionSpacing,
      children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['disableActionSpacing', 'children', 'classes', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    disableActionSpacing ? children : (0, _reactHelpers.cloneChildrenWithClassName)(children, classes.action)
  );
}

CardActions.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the card actions do not have additional margin.
   */
  disableActionSpacing: _propTypes2.default.bool
} : {};

CardActions.defaultProps = {
  disableActionSpacing: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardActions' })(CardActions);

/***/ }),

/***/ "./node_modules/material-ui/Card/CardContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing.unit * 2,
      '&:last-child': {
        paddingBottom: theme.spacing.unit * 3
      }
    }
  };
};

function CardContent(props) {
  var classes = props.classes,
      className = props.className,
      Component = props.component,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'component']);


  return _react2.default.createElement(Component, (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other));
}

CardContent.propTypes =  true ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
} : {};

CardContent.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardContent' })(CardContent);

/***/ }),

/***/ "./node_modules/material-ui/Card/CardHeader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Typography = __webpack_require__("./node_modules/material-ui/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing.unit * 2
    },
    avatar: {
      flex: '0 0 auto',
      marginRight: theme.spacing.unit * 2
    },
    action: {
      flex: '0 0 auto',
      alignSelf: 'flex-start',
      marginTop: theme.spacing.unit * -1,
      marginRight: theme.spacing.unit * -2
    },
    content: {
      flex: '1 1 auto'
    },
    title: {},
    subheader: {}
  };
};

function CardHeader(props) {
  var action = props.action,
      avatar = props.avatar,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      subheader = props.subheader,
      title = props.title,
      other = (0, _objectWithoutProperties3.default)(props, ['action', 'avatar', 'classes', 'className', 'component', 'subheader', 'title']);


  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
    avatar && _react2.default.createElement(
      'div',
      { className: classes.avatar },
      avatar
    ),
    _react2.default.createElement(
      'div',
      { className: classes.content },
      _react2.default.createElement(
        _Typography2.default,
        {
          variant: avatar ? 'body2' : 'headline',
          component: 'span',
          className: classes.title
        },
        title
      ),
      subheader && _react2.default.createElement(
        _Typography2.default,
        {
          variant: avatar ? 'body2' : 'body1',
          component: 'span',
          color: 'textSecondary',
          className: classes.subheader
        },
        subheader
      )
    ),
    action && _react2.default.createElement(
      'div',
      { className: classes.action },
      action
    )
  );
}

CardHeader.propTypes =  true ? {
  /**
   * The action to display in the card header.
   */
  action: _propTypes2.default.node,
  /**
   * The Avatar for the Card Header.
   */
  avatar: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * The content of the component.
   */
  subheader: _propTypes2.default.node,
  /**
   * The content of the Card Title.
   */
  title: _propTypes2.default.node
} : {};

CardHeader.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardHeader' })(CardHeader);

/***/ }),

/***/ "./node_modules/material-ui/Card/CardMedia.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  root: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  rootMedia: {
    width: '100%'
  }
};

var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];

function CardMedia(props) {
  var _classNames;

  var classes = props.classes,
      className = props.className,
      Component = props.component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'component', 'image', 'src', 'style']);


   true ? (0, _warning2.default)(Boolean(image || src), 'Material-UI: either `image` or `src` property must be specified.') : void 0;

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  var composedStyle = !isMediaComponent && image ? (0, _extends3.default)({ backgroundImage: 'url(' + image + ')' }, style) : style;
  var composedClassName = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.root, !isMediaComponent), (0, _defineProperty3.default)(_classNames, classes.rootMedia, isMediaComponent), _classNames), className);

  return _react2.default.createElement(Component, (0, _extends3.default)({
    className: composedClassName,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other));
}

CardMedia.propTypes =  true ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Component for rendering image.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: _propTypes2.default.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: _propTypes2.default.string,
  /**
   * @ignore
   */
  style: _propTypes2.default.object
} : {};

CardMedia.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardMedia' })(CardMedia);

/***/ }),

/***/ "./node_modules/material-ui/Card/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Card = __webpack_require__("./node_modules/material-ui/Card/Card.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Card).default;
  }
});

var _CardContent = __webpack_require__("./node_modules/material-ui/Card/CardContent.js");

Object.defineProperty(exports, 'CardContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CardContent).default;
  }
});

var _CardActions = __webpack_require__("./node_modules/material-ui/Card/CardActions.js");

Object.defineProperty(exports, 'CardActions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CardActions).default;
  }
});

var _CardMedia = __webpack_require__("./node_modules/material-ui/Card/CardMedia.js");

Object.defineProperty(exports, 'CardMedia', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CardMedia).default;
  }
});

var _CardHeader = __webpack_require__("./node_modules/material-ui/Card/CardHeader.js");

Object.defineProperty(exports, 'CardHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CardHeader).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Checkbox/Checkbox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _SwitchBase = __webpack_require__("./node_modules/material-ui/internal/SwitchBase.js");

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

var _IndeterminateCheckBox = __webpack_require__("./node_modules/material-ui/internal/svg-icons/IndeterminateCheckBox.js");

var _IndeterminateCheckBox2 = _interopRequireDefault(_IndeterminateCheckBox);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    default: {
      color: theme.palette.text.secondary
    },
    checked: {},
    checkedPrimary: {
      color: theme.palette.primary.main
    },
    checkedSecondary: {
      color: theme.palette.secondary.main
    },
    disabled: {
      color: theme.palette.action.disabled
    }
  };
};

function Checkbox(props) {
  var _classNames;

  var checkedIcon = props.checkedIcon,
      classes = props.classes,
      color = props.color,
      icon = props.icon,
      indeterminate = props.indeterminate,
      indeterminateIcon = props.indeterminateIcon,
      other = (0, _objectWithoutProperties3.default)(props, ['checkedIcon', 'classes', 'color', 'icon', 'indeterminate', 'indeterminateIcon']);

  var checkedClass = (0, _classnames2.default)(classes.checked, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.checkedPrimary, color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.checkedSecondary, color === 'secondary'), _classNames));

  return _react2.default.createElement(_SwitchBase2.default, (0, _extends3.default)({
    checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
    classes: {
      default: classes.default,
      checked: checkedClass,
      disabled: classes.disabled
    },
    icon: indeterminate ? indeterminateIcon : icon
  }, other));
}

Checkbox.propTypes =  true ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['primary', 'secondary']),
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes2.default.node,
  /**
   * The id of the `input` element.
   */
  id: _propTypes2.default.string,
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate: _propTypes2.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: _propTypes2.default.node,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * The input component property `type`.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

Checkbox.defaultProps = {
  color: 'secondary',
  indeterminate: false,
  indeterminateIcon: _react2.default.createElement(_IndeterminateCheckBox2.default, null)
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCheckbox' })(Checkbox);

/***/ }),

/***/ "./node_modules/material-ui/Checkbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__("./node_modules/material-ui/Checkbox/Checkbox.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkbox).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Chip/Chip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = __webpack_require__("./node_modules/keycode/index.js");

var _keycode2 = _interopRequireDefault(_keycode);

var _Cancel = __webpack_require__("./node_modules/material-ui/internal/svg-icons/Cancel.js");

var _Cancel2 = _interopRequireDefault(_Cancel);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _colorManipulator = __webpack_require__("./node_modules/material-ui/styles/colorManipulator.js");

__webpack_require__("./node_modules/material-ui/Avatar/Avatar.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// So we don't have any override priority issue.

var styles = exports.styles = function styles(theme) {
  var height = 32;
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = (0, _colorManipulator.fade)(theme.palette.text.primary, 0.26);

  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      outline: 'none', // No outline on focused element in Chrome (as triggered by tabIndex prop)
      border: 'none', // Remove `button` border
      padding: 0 // Remove `button` padding
    },
    clickable: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.12)
      }
    },
    deletable: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      }
    },
    avatar: {
      marginRight: -4,
      width: height,
      height: height,
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      fontSize: theme.typography.pxToRem(16)
    },
    avatarChildren: {
      width: 19,
      height: 19
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit'
    },
    deleteIcon: {
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      cursor: 'pointer',
      height: 'auto',
      margin: '0 4px 0 -8px',
      '&:hover': {
        color: (0, _colorManipulator.fade)(deleteIconColor, 0.4)
      }
    }
  };
};

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */

var Chip = function (_React$Component) {
  (0, _inherits3.default)(Chip, _React$Component);

  function Chip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chip.__proto__ || (0, _getPrototypeOf2.default)(Chip)).call.apply(_ref, [this].concat(args))), _this), _this.chipRef = null, _this.handleDeleteIconClick = function (event) {
      // Stop the event from bubbling up to the `Chip`
      event.stopPropagation();
      var onDelete = _this.props.onDelete;

      if (onDelete) {
        onDelete(event);
      }
    }, _this.handleKeyDown = function (event) {
      // Ignore events from children of `Chip`.
      if (event.currentTarget !== event.target) {
        return;
      }

      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onDelete = _this$props.onDelete,
          onKeyDown = _this$props.onKeyDown;

      var key = (0, _keycode2.default)(event);

      if (onClick && (key === 'space' || key === 'enter')) {
        event.preventDefault();
        onClick(event);
      } else if (onDelete && key === 'backspace') {
        event.preventDefault();
        onDelete(event);
      } else if (key === 'esc') {
        event.preventDefault();
        if (_this.chipRef) {
          _this.chipRef.blur();
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chip, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          avatarProp = _props.avatar,
          classes = _props.classes,
          classNameProp = _props.className,
          Component = _props.component,
          deleteIconProp = _props.deleteIcon,
          label = _props.label,
          onClick = _props.onClick,
          onDelete = _props.onDelete,
          onKeyDown = _props.onKeyDown,
          tabIndexProp = _props.tabIndex,
          other = (0, _objectWithoutProperties3.default)(_props, ['avatar', 'classes', 'className', 'component', 'deleteIcon', 'label', 'onClick', 'onDelete', 'onKeyDown', 'tabIndex']);


      var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.clickable, onClick), (0, _defineProperty3.default)({}, classes.deletable, onDelete), classNameProp);

      var deleteIcon = null;
      if (onDelete) {
        deleteIcon = deleteIconProp && _react2.default.isValidElement(deleteIconProp) ? _react2.default.cloneElement(deleteIconProp, {
          className: (0, _classnames2.default)(deleteIconProp.props.className, classes.deleteIcon),
          onClick: this.handleDeleteIconClick
        }) : _react2.default.createElement(_Cancel2.default, { className: classes.deleteIcon, onClick: this.handleDeleteIconClick });
      }

      var avatar = null;
      if (avatarProp && _react2.default.isValidElement(avatarProp)) {
        avatar = _react2.default.cloneElement(avatarProp, {
          className: (0, _classnames2.default)(classes.avatar, avatarProp.props.className),
          childrenClassName: (0, _classnames2.default)(classes.avatarChildren, avatarProp.props.childrenClassName)
        });
      }

      var tabIndex = tabIndexProp;

      if (!tabIndex) {
        tabIndex = onClick || onDelete ? 0 : -1;
      }

      return _react2.default.createElement(
        Component,
        (0, _extends3.default)({
          role: 'button',
          className: className,
          tabIndex: tabIndex,
          onClick: onClick,
          onKeyDown: this.handleKeyDown,
          ref: function ref(node) {
            _this2.chipRef = node;
          }
        }, other),
        avatar,
        _react2.default.createElement(
          'span',
          { className: classes.label },
          label
        ),
        deleteIcon
      );
    }
  }]);
  return Chip;
}(_react2.default.Component);

Chip.propTypes =  true ? {
  /**
   * Avatar element.
   */
  avatar: _propTypes2.default.element,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: _propTypes2.default.element,
  /**
   * The content of the label.
   */
  label: _propTypes2.default.node,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
} : {};

Chip.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiChip' })(Chip);

/***/ }),

/***/ "./node_modules/material-ui/Chip/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Chip = __webpack_require__("./node_modules/material-ui/Chip/Chip.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Chip).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Dialog/Dialog.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

var _Modal = __webpack_require__("./node_modules/material-ui/Modal/index.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _Fade = __webpack_require__("./node_modules/material-ui/transitions/Fade.js");

var _Fade2 = _interopRequireDefault(_Fade);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      display: 'flex',
      margin: theme.spacing.unit * 4,
      flexDirection: 'column',
      flex: '0 1 auto',
      position: 'relative',
      maxHeight: '90vh',
      overflowY: 'auto', // Fix IE11 issue, to remove at some point.
      '&:focus': {
        outline: 'none'
      }
    },
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 360)
    },
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm
    },
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md
    },
    fullWidth: {
      width: '100%'
    },
    fullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      borderRadius: 0
    }
  };
};

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
// @inheritedComponent Modal

function Dialog(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      fullScreen = props.fullScreen,
      fullWidth = props.fullWidth,
      disableBackdropClick = props.disableBackdropClick,
      disableEscapeKeyDown = props.disableEscapeKeyDown,
      maxWidth = props.maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      PaperProps = props.PaperProps,
      TransitionProp = props.transition,
      transitionDuration = props.transitionDuration,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'fullScreen', 'fullWidth', 'disableBackdropClick', 'disableEscapeKeyDown', 'maxWidth', 'onBackdropClick', 'onClose', 'onEnter', 'onEntered', 'onEntering', 'onEscapeKeyDown', 'onExit', 'onExited', 'onExiting', 'open', 'PaperProps', 'transition', 'transitionDuration']);


  return _react2.default.createElement(
    _Modal2.default,
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, className),
      BackdropProps: {
        transitionDuration: transitionDuration
      },
      disableBackdropClick: disableBackdropClick,
      disableEscapeKeyDown: disableEscapeKeyDown,
      onBackdropClick: onBackdropClick,
      onEscapeKeyDown: onEscapeKeyDown,
      onClose: onClose,
      open: open,
      role: 'dialog'
    }, other),
    _react2.default.createElement(
      TransitionProp,
      {
        appear: true,
        'in': open,
        timeout: transitionDuration,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited
      },
      _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({
          elevation: 24,
          className: (0, _classnames2.default)(classes.paper, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes['paperWidth' + (maxWidth ? (0, _helpers.capitalize)(maxWidth) : '')], maxWidth), (0, _defineProperty3.default)(_classNames, classes.fullScreen, fullScreen), (0, _defineProperty3.default)(_classNames, classes.fullWidth, fullWidth), _classNames))
        }, PaperProps),
        children
      )
    )
  );
}

Dialog.propTypes =  true ? {
  /**
   * Dialog children, usually the included sub-components.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: _propTypes2.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: _propTypes2.default.bool,
  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: _propTypes2.default.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   */
  maxWidth: _propTypes2.default.oneOf(['xs', 'sm', 'md', false]),
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes2.default.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired before the dialog enters.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   */
  onEscapeKeyDown: _propTypes2.default.func,
  /**
   * Callback fired before the dialog exits.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the dialog has exited.
   */
  onExited: _propTypes2.default.func,
  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * If `true`, the Dialog is open.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: _propTypes2.default.object,
  /**
   * Transition component.
   */
  transition: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })])
} : {};

Dialog.defaultProps = {
  fullScreen: false,
  fullWidth: false,
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  maxWidth: 'sm',
  transition: _Fade2.default,
  transitionDuration: { enter: _transitions.duration.enteringScreen, exit: _transitions.duration.leavingScreen }
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialog' })(Dialog);

/***/ }),

/***/ "./node_modules/material-ui/Dialog/DialogActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

__webpack_require__("./node_modules/material-ui/Button/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// So we don't have any override priority issue.

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: theme.spacing.unit + 'px ' + theme.spacing.unit / 2 + 'px',
      flex: '0 0 auto'
    },
    action: {
      margin: '0 ' + theme.spacing.unit / 2 + 'px'
    },
    button: {
      minWidth: 64
    }
  };
};

function DialogActions(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    _react2.default.Children.map(children, function (child) {
      if (!_react2.default.isValidElement(child)) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: classes.action },
        _react2.default.cloneElement(child, {
          className: (0, _classnames2.default)(classes.button, child.props.className)
        })
      );
    })
  );
}

DialogActions.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogActions' })(DialogActions);

/***/ }),

/***/ "./node_modules/material-ui/Dialog/DialogContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  var spacing = theme.spacing.unit * 3;
  return {
    root: {
      flex: '1 1 auto',
      overflowY: 'auto',
      padding: '0 ' + spacing + 'px ' + spacing + 'px ' + spacing + 'px',
      '&:first-child': {
        paddingTop: spacing
      }
    }
  };
};

function DialogContent(props) {
  var classes = props.classes,
      children = props.children,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'children', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

DialogContent.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogContent' })(DialogContent);

/***/ }),

/***/ "./node_modules/material-ui/Dialog/DialogContentText.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: (0, _extends3.default)({}, theme.typography.subheading, {
      color: theme.palette.text.secondary,
      margin: 0
    })
  };
};

function DialogContentText(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className']);


  return _react2.default.createElement(
    'p',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

DialogContentText.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogContentText' })(DialogContentText);

/***/ }),

/***/ "./node_modules/material-ui/Dialog/DialogTitle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Typography = __webpack_require__("./node_modules/material-ui/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 3 + 'px       20px ' + theme.spacing.unit * 3 + 'px',
      flex: '0 0 auto'
    }
  };
};

function DialogTitle(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      disableTypography = props.disableTypography,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'disableTypography']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    disableTypography ? children : _react2.default.createElement(
      _Typography2.default,
      { variant: 'title' },
      children
    )
  );
}

DialogTitle.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: _propTypes2.default.bool
} : {};

DialogTitle.defaultProps = {
  disableTypography: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogTitle' })(DialogTitle);

/***/ }),

/***/ "./node_modules/material-ui/Dialog/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dialog = __webpack_require__("./node_modules/material-ui/Dialog/Dialog.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Dialog).default;
  }
});

var _DialogActions = __webpack_require__("./node_modules/material-ui/Dialog/DialogActions.js");

Object.defineProperty(exports, 'DialogActions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogActions).default;
  }
});

var _DialogTitle = __webpack_require__("./node_modules/material-ui/Dialog/DialogTitle.js");

Object.defineProperty(exports, 'DialogTitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogTitle).default;
  }
});

var _DialogContent = __webpack_require__("./node_modules/material-ui/Dialog/DialogContent.js");

Object.defineProperty(exports, 'DialogContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogContent).default;
  }
});

var _DialogContentText = __webpack_require__("./node_modules/material-ui/Dialog/DialogContentText.js");

Object.defineProperty(exports, 'DialogContentText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogContentText).default;
  }
});

var _withMobileDialog = __webpack_require__("./node_modules/material-ui/Dialog/withMobileDialog.js");

Object.defineProperty(exports, 'withMobileDialog', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withMobileDialog).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Dialog/withMobileDialog.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withWidth = __webpack_require__("./node_modules/material-ui/utils/withWidth.js");

var _withWidth2 = _interopRequireDefault(_withWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dialog will responsively be full screen *at or below* the given breakpoint
 * (defaults to 'sm' for mobile devices).
 * Notice that this Higher-order Component is incompatible with server side rendering.
 */
var withMobileDialog = function withMobileDialog() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$breakpoint = options.breakpoint,
        breakpoint = _options$breakpoint === undefined ? 'sm' : _options$breakpoint;


    function WithMobileDialog(props) {
      return _react2.default.createElement(Component, (0, _extends3.default)({ fullScreen: (0, _withWidth.isWidthDown)(breakpoint, props.width) }, props));
    }

    WithMobileDialog.propTypes =  true ? {
      width: _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
    } : {};

    return (0, _withWidth2.default)()(WithMobileDialog);
  };
};

exports.default = withMobileDialog;

/***/ }),

/***/ "./node_modules/material-ui/Divider/Divider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _colorManipulator = __webpack_require__("./node_modules/material-ui/styles/colorManipulator.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      height: 1,
      margin: 0, // Reset browser default style.
      border: 'none',
      flexShrink: 0
    },
    inset: {
      marginLeft: 72
    },
    default: {
      backgroundColor: theme.palette.divider
    },
    light: {
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.divider, 0.08)
    },
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    }
  };
};

function Divider(props) {
  var _classNames;

  var absolute = props.absolute,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      inset = props.inset,
      light = props.light,
      other = (0, _objectWithoutProperties3.default)(props, ['absolute', 'classes', 'className', 'component', 'inset', 'light']);


  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.absolute, absolute), (0, _defineProperty3.default)(_classNames, classes.inset, inset), _classNames), light ? classes.light : classes.default, classNameProp);

  return _react2.default.createElement(Component, (0, _extends3.default)({ className: className }, other));
}

Divider.propTypes =  true ? {
  absolute: _propTypes2.default.bool,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the divider will be indented.
   */
  inset: _propTypes2.default.bool,
  /**
   * If `true`, the divider will have a lighter color.
   */
  light: _propTypes2.default.bool
} : {};

Divider.defaultProps = {
  absolute: false,
  component: 'hr',
  inset: false,
  light: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDivider' })(Divider);

/***/ }),

/***/ "./node_modules/material-ui/Divider/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider = __webpack_require__("./node_modules/material-ui/Divider/Divider.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Divider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Drawer/Drawer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Modal = __webpack_require__("./node_modules/material-ui/Modal/index.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Slide = __webpack_require__("./node_modules/material-ui/transitions/Slide.js");

var _Slide2 = _interopRequireDefault(_Slide);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSlideDirection(anchor) {
  if (anchor === 'left') {
    return 'right';
  } else if (anchor === 'right') {
    return 'left';
  } else if (anchor === 'top') {
    return 'down';
  }

  // (anchor === 'bottom')
  return 'up';
} // @inheritedComponent Modal

var styles = exports.styles = function styles(theme) {
  return {
    docked: {
      flex: '0 0 auto'
    },
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch', // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      '&:focus': {
        outline: 'none'
      }
    },
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    paperAnchorDockedLeft: {
      borderRight: '1px solid ' + theme.palette.divider
    },
    paperAnchorDockedTop: {
      borderBottom: '1px solid ' + theme.palette.divider
    },
    paperAnchorDockedRight: {
      borderLeft: '1px solid ' + theme.palette.divider
    },
    paperAnchorDockedBottom: {
      borderTop: '1px solid ' + theme.palette.divider
    },
    modal: {} // Just here so people can override the style.
  };
};

var Drawer = function (_React$Component) {
  (0, _inherits3.default)(Drawer, _React$Component);

  function Drawer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Drawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Drawer.__proto__ || (0, _getPrototypeOf2.default)(Drawer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // Let's assume that the Drawer will always be rendered on user space.
      // We use that state is order to skip the appear transition during the
      // initial mount of the component.
      firstMount: true
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({
        firstMount: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          anchorProp = _props.anchor,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          elevation = _props.elevation,
          ModalProps = _props.ModalProps,
          onClose = _props.onClose,
          open = _props.open,
          PaperProps = _props.PaperProps,
          SlideProps = _props.SlideProps,
          theme = _props.theme,
          transitionDuration = _props.transitionDuration,
          variant = _props.variant,
          other = (0, _objectWithoutProperties3.default)(_props, ['anchor', 'children', 'classes', 'className', 'elevation', 'ModalProps', 'onClose', 'open', 'PaperProps', 'SlideProps', 'theme', 'transitionDuration', 'variant']);


      var anchor = anchorProp;
      if (theme.direction === 'rtl' && ['left', 'right'].includes(anchor)) {
        anchor = anchor === 'left' ? 'right' : 'left';
      }

      var drawer = _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({
          elevation: variant === 'temporary' ? elevation : 0,
          square: true,
          className: (0, _classnames2.default)(classes.paper, classes['paperAnchor' + (0, _helpers.capitalize)(anchor)], (0, _defineProperty3.default)({}, classes['paperAnchorDocked' + (0, _helpers.capitalize)(anchor)], variant !== 'temporary'))
        }, PaperProps),
        children
      );

      if (variant === 'permanent') {
        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({ className: (0, _classnames2.default)(classes.docked, className) }, other),
          drawer
        );
      }

      var slidingDrawer = _react2.default.createElement(
        _Slide2.default,
        (0, _extends3.default)({
          'in': open,
          direction: getSlideDirection(anchor),
          timeout: transitionDuration,
          appear: !this.state.firstMount
        }, SlideProps),
        drawer
      );

      if (variant === 'persistent') {
        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({ className: (0, _classnames2.default)(classes.docked, className) }, other),
          slidingDrawer
        );
      }

      // variant === temporary
      return _react2.default.createElement(
        _Modal2.default,
        (0, _extends3.default)({
          BackdropProps: {
            transitionDuration: transitionDuration
          },
          className: (0, _classnames2.default)(classes.modal, className),
          open: open,
          onClose: onClose
        }, other, ModalProps),
        slidingDrawer
      );
    }
  }]);
  return Drawer;
}(_react2.default.Component);

Drawer.propTypes =  true ? {
  /**
   * Side from which the drawer will appear.
   */
  anchor: _propTypes2.default.oneOf(['left', 'top', 'right', 'bottom']),
  /**
   * The contents of the drawer.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The elevation of the drawer.
   */
  elevation: _propTypes2.default.number,
  /**
   * Properties applied to the `Modal` element.
   */
  ModalProps: _propTypes2.default.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * If `true`, the drawer is open.
   */
  open: _propTypes2.default.bool,
  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: _propTypes2.default.object,
  /**
   * Properties applied to the `Slide` element.
   */
  SlideProps: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })]),
  /**
   * The type of drawer.
   */
  variant: _propTypes2.default.oneOf(['permanent', 'persistent', 'temporary'])
} : {};

Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  open: false,
  transitionDuration: { enter: _transitions.duration.enteringScreen, exit: _transitions.duration.leavingScreen },
  variant: 'temporary' // Mobile first.
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDrawer', flip: false, withTheme: true })(Drawer);

/***/ }),

/***/ "./node_modules/material-ui/Drawer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Drawer = __webpack_require__("./node_modules/material-ui/Drawer/Drawer.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Drawer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/ExpansionPanel/ExpansionPanel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Collapse = __webpack_require__("./node_modules/material-ui/transitions/Collapse.js");

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactHelpers = __webpack_require__("./node_modules/material-ui/utils/reactHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };

  return {
    root: {
      position: 'relative',
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        '&:before': {
          display: 'none'
        }
      },
      '&:last-child': {
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      }
    },
    expanded: {
      margin: theme.spacing.unit * 2 + 'px 0',
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      },
      '&:before': {
        opacity: 0
      }
    },
    disabled: {
      backgroundColor: theme.palette.action.disabledBackground
    }
  };
}; // @inheritedComponent Paper

var ExpansionPanel = function (_React$Component) {
  (0, _inherits3.default)(ExpansionPanel, _React$Component);

  function ExpansionPanel() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ExpansionPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExpansionPanel.__proto__ || (0, _getPrototypeOf2.default)(ExpansionPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false
    }, _this.isControlled = null, _this.handleChange = function (event) {
      var onChange = _this.props.onChange;

      var expanded = !_this.state.expanded;

      if (onChange) {
        onChange(event, expanded);
      }

      if (!_this.isControlled) {
        _this.setState({ expanded: expanded });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ExpansionPanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          expanded = _props.expanded,
          defaultExpanded = _props.defaultExpanded;

      this.isControlled = expanded != null;
      this.setState({
        expanded: this.isControlled ? expanded : defaultExpanded
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlled) {
        this.setState({
          expanded: nextProps.expanded
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props2 = this.props,
          childrenProp = _props2.children,
          classes = _props2.classes,
          classNameProp = _props2.className,
          CollapsePropsProp = _props2.CollapseProps,
          defaultExpanded = _props2.defaultExpanded,
          disabled = _props2.disabled,
          expandedProp = _props2.expanded,
          onChange = _props2.onChange,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'classes', 'className', 'CollapseProps', 'defaultExpanded', 'disabled', 'expanded', 'onChange']);
      var expanded = this.state.expanded;


      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.expanded, expanded), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);

      var summary = null;

      var children = _react2.default.Children.map(childrenProp, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return null;
        }

        if ((0, _reactHelpers.isMuiElement)(child, ['ExpansionPanelSummary'])) {
          summary = _react2.default.cloneElement(child, {
            disabled: disabled,
            expanded: expanded,
            onChange: _this2.handleChange
          });
          return null;
        }

        return child;
      });

      var CollapseProps = !expanded ? {
        'aria-hidden': 'true'
      } : null;

      return _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({ className: className, elevation: 1, square: true }, other),
        summary,
        _react2.default.createElement(
          _Collapse2.default,
          (0, _extends3.default)({ 'in': expanded, timeout: 'auto' }, CollapseProps, CollapsePropsProp),
          children
        )
      );
    }
  }]);
  return ExpansionPanel;
}(_react2.default.Component);

ExpansionPanel.propTypes =  true ? {
  /**
   * The content of the expansion panel.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Properties applied to the `Collapse` element.
   */
  CollapseProps: _propTypes2.default.object,
  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: _propTypes2.default.bool,
  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: _propTypes2.default.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} expanded The `expanded` state of the panel
   */
  onChange: _propTypes2.default.func
} : {};

ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanel' })(ExpansionPanel);

/***/ }),

/***/ "./node_modules/material-ui/ExpansionPanel/ExpansionPanelActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactHelpers = __webpack_require__("./node_modules/material-ui/utils/reactHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: theme.spacing.unit * 2 + 'px ' + theme.spacing.unit + 'px'
    },
    action: {
      marginLeft: theme.spacing.unit
    }
  };
};

function ExpansionPanelActions(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    (0, _reactHelpers.cloneChildrenWithClassName)(children, classes.action)
  );
}

ExpansionPanelActions.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanelActions' })(ExpansionPanelActions);

/***/ }),

/***/ "./node_modules/material-ui/ExpansionPanel/ExpansionPanelDetails.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexGrow: 1,
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 3 + 'px'
    }
  };
};

function ExpansionPanelDetails(props) {
  var classes = props.classes,
      children = props.children,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'children', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

ExpansionPanelDetails.propTypes =  true ? {
  /**
   * The content of the expansion panel details.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanelDetails' })(ExpansionPanelDetails);

/***/ }),

/***/ "./node_modules/material-ui/ExpansionPanel/ExpansionPanelSummary.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonBase = __webpack_require__("./node_modules/material-ui/ButtonBase/index.js");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _IconButton = __webpack_require__("./node_modules/material-ui/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent ButtonBase

var styles = exports.styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    root: {
      display: 'flex',
      minHeight: theme.spacing.unit * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: '0 ' + theme.spacing.unit * 3 + 'px 0 ' + theme.spacing.unit * 3 + 'px',
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      }
    },
    expanded: {
      minHeight: 64
    },
    focused: {
      backgroundColor: theme.palette.grey[300]
    },
    disabled: {
      opacity: 0.38
    },
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '& > :last-child': {
        paddingRight: theme.spacing.unit * 4
      }
    },
    contentExpanded: {
      margin: '20px 0'
    },
    expandIcon: {
      position: 'absolute',
      top: '50%',
      right: theme.spacing.unit,
      transform: 'translateY(-50%) rotate(0deg)',
      transition: theme.transitions.create('transform', transition)
    },
    expandIconExpanded: {
      transform: 'translateY(-50%) rotate(180deg)'
    }
  };
};

var ExpansionPanelSummary = function (_React$Component) {
  (0, _inherits3.default)(ExpansionPanelSummary, _React$Component);

  function ExpansionPanelSummary() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ExpansionPanelSummary);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExpansionPanelSummary.__proto__ || (0, _getPrototypeOf2.default)(ExpansionPanelSummary)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.handleFocus = function () {
      _this.setState({
        focused: true
      });
    }, _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    }, _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick;

      if (onChange) {
        onChange(event);
      }
      if (onClick) {
        onClick(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ExpansionPanelSummary, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disabled = _props.disabled,
          expanded = _props.expanded,
          expandIcon = _props.expandIcon,
          onChange = _props.onChange,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'disabled', 'expanded', 'expandIcon', 'onChange']);
      var focused = this.state.focused;


      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends3.default)({
          focusRipple: false,
          disableRipple: true,
          disabled: disabled,
          component: 'div',
          'aria-expanded': expanded,
          className: (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.expanded, expanded), (0, _defineProperty3.default)(_classNames, classes.focused, focused), _classNames), className)
        }, other, {
          onKeyboardFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleChange
        }),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.content, (0, _defineProperty3.default)({}, classes.contentExpanded, expanded)) },
          children
        ),
        expandIcon && _react2.default.createElement(
          _IconButton2.default,
          {
            disabled: disabled,
            className: (0, _classnames2.default)(classes.expandIcon, (0, _defineProperty3.default)({}, classes.expandIconExpanded, expanded)),
            component: 'div',
            tabIndex: -1,
            'aria-hidden': 'true'
          },
          expandIcon
        )
      );
    }
  }]);
  return ExpansionPanelSummary;
}(_react2.default.Component);

ExpansionPanelSummary.propTypes =  true ? {
  /**
   * The content of the expansion panel summary.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * If `true`, the summary will be displayed in a disabled state.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @ignore
   * If `true`, expands the summary, otherwise collapse it.
   */
  expanded: _propTypes2.default.bool,
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: _propTypes2.default.node,
  /**
   * @ignore
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func
} : {};

ExpansionPanelSummary.defaultProps = {
  disabled: false
};

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanelSummary' })(ExpansionPanelSummary);

/***/ }),

/***/ "./node_modules/material-ui/ExpansionPanel/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ExpansionPanel = __webpack_require__("./node_modules/material-ui/ExpansionPanel/ExpansionPanel.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpansionPanel).default;
  }
});

var _ExpansionPanelActions = __webpack_require__("./node_modules/material-ui/ExpansionPanel/ExpansionPanelActions.js");

Object.defineProperty(exports, 'ExpansionPanelActions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpansionPanelActions).default;
  }
});

var _ExpansionPanelDetails = __webpack_require__("./node_modules/material-ui/ExpansionPanel/ExpansionPanelDetails.js");

Object.defineProperty(exports, 'ExpansionPanelDetails', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpansionPanelDetails).default;
  }
});

var _ExpansionPanelSummary = __webpack_require__("./node_modules/material-ui/ExpansionPanel/ExpansionPanelSummary.js");

Object.defineProperty(exports, 'ExpansionPanelSummary', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpansionPanelSummary).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Grid/Grid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _createBreakpoints = __webpack_require__("./node_modules/material-ui/styles/createBreakpoints.js");

var _requirePropFactory = __webpack_require__("./node_modules/material-ui/utils/requirePropFactory.js");

var _requirePropFactory2 = _interopRequireDefault(_requirePropFactory);

var _Hidden = __webpack_require__("./node_modules/material-ui/Hidden/index.js");

var _Hidden2 = _interopRequireDefault(_Hidden);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GUTTERS = [0, 8, 16, 24, 40]; // A grid component using the following libs as inspiration.
//
// For the implementation:
// - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/

var GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  // For the auto layouting
  var styles = (0, _defineProperty3.default)({}, 'grid-' + breakpoint, {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%'
  });

  GRID_SIZES.forEach(function (size) {
    if (typeof size === 'boolean') {
      // Skip the first one as handle above.
      return;
    }

    // Only keep 6 significant numbers.
    var width = Math.round(size / 12 * 10e6) / 10e4 + '%';

    /* eslint-disable max-len */
    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
    /* eslint-enable max-len */
    styles['grid-' + breakpoint + '-' + size] = {
      flexBasis: width,
      maxWidth: width
    };
  });

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    (0, _extends3.default)(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  var styles = {};

  GUTTERS.forEach(function (spacing, index) {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles['spacing-' + breakpoint + '-' + spacing] = {
      margin: -spacing / 2,
      width: 'calc(100% + ' + spacing + 'px)',
      '& > $typeItem': {
        padding: spacing / 2
      }
    };
  });

  return styles;
}

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
var styles = exports.styles = function styles(theme) {
  return (0, _extends3.default)({
    typeContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    typeItem: {
      boxSizing: 'border-box',
      flex: '0 0 auto',
      margin: '0' // For instance, it's useful when used with a `figure` element.
    },
    zeroMinWidth: {
      minWidth: 0
    },
    'direction-xs-column': {
      flexDirection: 'column'
    },
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },
    'align-items-xs-center': {
      alignItems: 'center'
    },
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },
    'align-content-xs-center': {
      alignContent: 'center'
    },
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },
    'justify-xs-center': {
      justifyContent: 'center'
    },
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    }
  }, generateGutter(theme, 'xs'), _createBreakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};

function Grid(props) {
  var _classNames;

  var alignContent = props.alignContent,
      alignItems = props.alignItems,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      container = props.container,
      direction = props.direction,
      hidden = props.hidden,
      item = props.item,
      justify = props.justify,
      lg = props.lg,
      md = props.md,
      zeroMinWidth = props.zeroMinWidth,
      sm = props.sm,
      spacing = props.spacing,
      wrap = props.wrap,
      xl = props.xl,
      xs = props.xs,
      other = (0, _objectWithoutProperties3.default)(props, ['alignContent', 'alignItems', 'classes', 'className', 'component', 'container', 'direction', 'hidden', 'item', 'justify', 'lg', 'md', 'zeroMinWidth', 'sm', 'spacing', 'wrap', 'xl', 'xs']);


  var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.typeContainer, container), (0, _defineProperty3.default)(_classNames, classes.typeItem, item), (0, _defineProperty3.default)(_classNames, classes.zeroMinWidth, zeroMinWidth), (0, _defineProperty3.default)(_classNames, classes['spacing-xs-' + String(spacing)], container && spacing !== 0), (0, _defineProperty3.default)(_classNames, classes['direction-xs-' + String(direction)], direction !== Grid.defaultProps.direction), (0, _defineProperty3.default)(_classNames, classes['wrap-xs-' + String(wrap)], wrap !== Grid.defaultProps.wrap), (0, _defineProperty3.default)(_classNames, classes['align-items-xs-' + String(alignItems)], alignItems !== Grid.defaultProps.alignItems), (0, _defineProperty3.default)(_classNames, classes['align-content-xs-' + String(alignContent)], alignContent !== Grid.defaultProps.alignContent), (0, _defineProperty3.default)(_classNames, classes['justify-xs-' + String(justify)], justify !== Grid.defaultProps.justify), (0, _defineProperty3.default)(_classNames, classes['grid-xs'], xs === true), (0, _defineProperty3.default)(_classNames, classes['grid-xs-' + String(xs)], xs && xs !== true), (0, _defineProperty3.default)(_classNames, classes['grid-sm'], sm === true), (0, _defineProperty3.default)(_classNames, classes['grid-sm-' + String(sm)], sm && sm !== true), (0, _defineProperty3.default)(_classNames, classes['grid-md'], md === true), (0, _defineProperty3.default)(_classNames, classes['grid-md-' + String(md)], md && md !== true), (0, _defineProperty3.default)(_classNames, classes['grid-lg'], lg === true), (0, _defineProperty3.default)(_classNames, classes['grid-lg-' + String(lg)], lg && lg !== true), (0, _defineProperty3.default)(_classNames, classes['grid-xl'], xl === true), (0, _defineProperty3.default)(_classNames, classes['grid-xl-' + String(xl)], xl && xl !== true), _classNames), classNameProp);
  var gridProps = (0, _extends3.default)({ className: className }, other);

  if (hidden) {
    return _react2.default.createElement(
      _Hidden2.default,
      hidden,
      _react2.default.createElement(Component, gridProps)
    );
  }

  return _react2.default.createElement(Component, gridProps);
}

Grid.propTypes =  true ? {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: _propTypes2.default.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),
  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: _propTypes2.default.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: _propTypes2.default.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: _propTypes2.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  /**
   * If provided, will wrap with [Hidden](/api/hidden) component and given properties.
   */
  hidden: _propTypes2.default.object,
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: _propTypes2.default.bool,
  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: _propTypes2.default.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: _propTypes2.default.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: _propTypes2.default.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: _propTypes2.default.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: _propTypes2.default.oneOf(GUTTERS),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: _propTypes2.default.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: _propTypes2.default.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: _propTypes2.default.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: _propTypes2.default.bool
} : {};

Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  zeroMinWidth: false,
  spacing: 16,
  wrap: 'wrap'
};

// Add a wrapper component to generate some helper messages in the development
// environment.
/* eslint-disable react/no-multi-comp */
// eslint-disable-next-line import/no-mutable-exports
var GridWrapper = Grid;

if (true) {
  GridWrapper = function GridWrapper(props) {
    return _react2.default.createElement(Grid, props);
  };

  var requireProp = (0, _requirePropFactory2.default)('Grid');
  GridWrapper.propTypes = {
    alignContent: requireProp('container'),
    alignItems: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('zeroMinWidth')
  };
}

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiGrid' })(GridWrapper);

/***/ }),

/***/ "./node_modules/material-ui/Grid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Grid = __webpack_require__("./node_modules/material-ui/Grid/Grid.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grid).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/GridList/GridList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.
  }
};

function GridList(props) {
  var cellHeight = props.cellHeight,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      cols = props.cols,
      Component = props.component,
      spacing = props.spacing,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['cellHeight', 'children', 'classes', 'className', 'cols', 'component', 'spacing', 'style']);


  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, classNameProp),
      style: (0, _extends3.default)({ margin: -spacing / 2 }, style)
    }, other),
    _react2.default.Children.map(children, function (currentChild) {
      var childCols = currentChild.props.cols || 1;
      var childRows = currentChild.props.rows || 1;

      return _react2.default.cloneElement(currentChild, {
        style: (0, _extends3.default)({
          width: 100 / cols * childCols + '%',
          height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
          padding: spacing / 2
        }, currentChild.props.style)
      });
    })
  );
}

GridList.propTypes =  true ? {
  /**
   * Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['auto'])]),
  /**
   * Grid Tiles that will be in Grid List.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Number of columns.
   */
  cols: _propTypes2.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Number of px for the spacing between tiles.
   */
  spacing: _propTypes2.default.number,
  /**
   * @ignore
   */
  style: _propTypes2.default.object
} : {};

GridList.defaultProps = {
  cellHeight: 180,
  cols: 2,
  component: 'ul',
  spacing: 4
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiGridList' })(GridList);

/***/ }),

/***/ "./node_modules/material-ui/GridList/GridListTile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  root: {
    boxSizing: 'border-box',
    flexShrink: 0
  },
  tile: {
    position: 'relative',
    display: 'block', // In case it's not renderd with a div.
    height: '100%',
    overflow: 'hidden'
  },
  imgFullHeight: {
    height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '50%'
  },
  imgFullWidth: {
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%'
  }
};

var GridListTile = function (_React$Component) {
  (0, _inherits3.default)(GridListTile, _React$Component);

  function GridListTile() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GridListTile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GridListTile.__proto__ || (0, _getPrototypeOf2.default)(GridListTile)).call.apply(_ref, [this].concat(args))), _this), _this.imgElement = null, _this.handleResize = (0, _debounce2.default)(function () {
      _this.fit();
    }, 166), _this.fit = function () {
      var imgElement = _this.imgElement;

      if (!imgElement) {
        return;
      }

      if (!imgElement.complete) {
        return;
      }

      if (imgElement.width / imgElement.height > imgElement.parentNode.offsetWidth / imgElement.parentNode.offsetHeight) {
        var _imgElement$classList, _imgElement$classList2;

        (_imgElement$classList = imgElement.classList).remove.apply(_imgElement$classList, (0, _toConsumableArray3.default)(_this.props.classes.imgFullWidth.split(' ')));
        (_imgElement$classList2 = imgElement.classList).add.apply(_imgElement$classList2, (0, _toConsumableArray3.default)(_this.props.classes.imgFullHeight.split(' ')));
      } else {
        var _imgElement$classList3, _imgElement$classList4;

        (_imgElement$classList3 = imgElement.classList).remove.apply(_imgElement$classList3, (0, _toConsumableArray3.default)(_this.props.classes.imgFullHeight.split(' ')));
        (_imgElement$classList4 = imgElement.classList).add.apply(_imgElement$classList4, (0, _toConsumableArray3.default)(_this.props.classes.imgFullWidth.split(' ')));
      }

      imgElement.removeEventListener('load', _this.fit);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GridListTile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.ensureImageCover();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.ensureImageCover();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
    }
  }, {
    key: 'ensureImageCover',
    value: function ensureImageCover() {
      if (!this.imgElement) {
        return;
      }

      if (this.imgElement.complete) {
        this.fit();
      } else {
        this.imgElement.addEventListener('load', this.fit);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          cols = _props.cols,
          Component = _props.component,
          rows = _props.rows,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'cols', 'component', 'rows']);


      return _react2.default.createElement(
        Component,
        (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        _react2.default.createElement(
          'div',
          { className: classes.tile },
          _react2.default.Children.map(children, function (child) {
            if (child && child.type === 'img') {
              return _react2.default.cloneElement(child, {
                key: 'img',
                ref: function ref(node) {
                  _this2.imgElement = node;
                }
              });
            }

            return child;
          })
        )
      );
    }
  }]);
  return GridListTile;
}(_react2.default.Component);

GridListTile.propTypes =  true ? {
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in which case GridListTile takes care of making the image "cover" available space
   * (similar to `background-size: cover` or to `object-fit: cover`).
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Width of the tile in number of grid cells.
   */
  cols: _propTypes2.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Height of the tile in number of grid cells.
   */
  rows: _propTypes2.default.number
} : {};

GridListTile.defaultProps = {
  cols: 1,
  component: 'li',
  rows: 1
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiGridListTile' })(GridListTile);

/***/ }),

/***/ "./node_modules/material-ui/GridList/GridListTileBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 48,
      background: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamily
    },
    rootBottom: {
      bottom: 0
    },
    rootTop: {
      top: 0
    },
    rootWithSubtitle: {
      height: 68
    },
    titleWrap: {
      flexGrow: 1,
      marginLeft: theme.mixins.gutters({}).paddingLeft,
      marginRight: theme.mixins.gutters({}).paddingRight,
      color: theme.palette.common.white,
      overflow: 'hidden'
    },
    titleWrapActionLeft: {
      marginLeft: 0
    },
    titleWrapActionRight: {
      marginRight: 0
    },
    title: {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '24px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    subtitle: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    actionIconPositionLeft: {
      order: -1
    },
    childImg: {
      height: '100%',
      transform: 'translateX(-50%)',
      position: 'relative',
      left: '50%'
    }
  };
};

function GridListTileBar(props) {
  var _classNames, _classNames2;

  var actionIcon = props.actionIcon,
      actionPosition = props.actionPosition,
      classes = props.classes,
      classNameProp = props.className,
      subtitle = props.subtitle,
      title = props.title,
      titlePosition = props.titlePosition,
      other = (0, _objectWithoutProperties3.default)(props, ['actionIcon', 'actionPosition', 'classes', 'className', 'subtitle', 'title', 'titlePosition']);


  var actionPos = actionIcon && actionPosition;
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.rootBottom, titlePosition === 'bottom'), (0, _defineProperty3.default)(_classNames, classes.rootTop, titlePosition === 'top'), (0, _defineProperty3.default)(_classNames, classes.rootWithSubtitle, subtitle), _classNames), classNameProp);

  // Remove the margin between the title / subtitle wrapper, and the Action Icon
  var titleWrapClassName = (0, _classnames2.default)(classes.titleWrap, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.titleWrapActionLeft, actionPos === 'left'), (0, _defineProperty3.default)(_classNames2, classes.titleWrapActionRight, actionPos === 'right'), _classNames2));

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    _react2.default.createElement(
      'div',
      { className: titleWrapClassName },
      _react2.default.createElement(
        'div',
        { className: classes.title },
        title
      ),
      subtitle ? _react2.default.createElement(
        'div',
        { className: classes.subtitle },
        subtitle
      ) : null
    ),
    actionIcon ? _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.actionIconPositionLeft, actionPos === 'left')) },
      actionIcon
    ) : null
  );
}

GridListTileBar.propTypes =  true ? {
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon: _propTypes2.default.node,
  /**
   * Position of secondary action IconButton.
   */
  actionPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle: _propTypes2.default.node,
  /**
   * Title to be displayed on tile.
   */
  title: _propTypes2.default.node,
  /**
   * Position of the title bar.
   */
  titlePosition: _propTypes2.default.oneOf(['top', 'bottom'])
} : {};

GridListTileBar.defaultProps = {
  actionPosition: 'right',
  titlePosition: 'bottom'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiGridListTileBar' })(GridListTileBar);

/***/ }),

/***/ "./node_modules/material-ui/GridList/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GridList = __webpack_require__("./node_modules/material-ui/GridList/GridList.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GridList).default;
  }
});

var _GridListTile = __webpack_require__("./node_modules/material-ui/GridList/GridListTile.js");

Object.defineProperty(exports, 'GridListTile', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GridListTile).default;
  }
});

var _GridListTileBar = __webpack_require__("./node_modules/material-ui/GridList/GridListTileBar.js");

Object.defineProperty(exports, 'GridListTileBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GridListTileBar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Hidden/Hidden.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HiddenJs = __webpack_require__("./node_modules/material-ui/Hidden/HiddenJs.js");

var _HiddenJs2 = _interopRequireDefault(_HiddenJs);

var _HiddenCss = __webpack_require__("./node_modules/material-ui/Hidden/HiddenCss.js");

var _HiddenCss2 = _interopRequireDefault(_HiddenCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Responsively hides children based on the selected implementation.
 */
function Hidden(props) {
  var implementation = props.implementation,
      other = (0, _objectWithoutProperties3.default)(props, ['implementation']);


  if (implementation === 'js') {
    return _react2.default.createElement(_HiddenJs2.default, other);
  }

  return _react2.default.createElement(_HiddenCss2.default, other);
}

Hidden.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for server
   * side rendering.
   */
  implementation: _propTypes2.default.oneOf(['js', 'css']),
  /**
   * You can use this property when choosing the `js` implementation with server side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty componenent during the first mount.
   * In some situation you might want to use an heristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * http://caniuse.com/#search=client%20hint
   */
  initialWidth: _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
   * If true, screens this size and down will be hidden.
   */
  lgDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  lgUp: _propTypes2.default.bool,
  /**
   * If true, screens this size and down will be hidden.
   */
  mdDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  mdUp: _propTypes2.default.bool,
  /**
   * Hide the given breakpoint(s).
   */
  only: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),
  /**
   * If true, screens this size and down will be hidden.
   */
  smDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  smUp: _propTypes2.default.bool,
  /**
   * If true, screens this size and down will be hidden.
   */
  xlDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  xlUp: _propTypes2.default.bool,
  /**
   * If true, screens this size and down will be hidden.
   */
  xsDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  xsUp: _propTypes2.default.bool
} : {};

Hidden.defaultProps = {
  implementation: 'js',
  lgDown: false,
  lgUp: false,
  mdDown: false,
  mdUp: false,
  smDown: false,
  smUp: false,
  xlDown: false,
  xlUp: false,
  xsDown: false,
  xsUp: false
};

exports.default = Hidden;

/***/ }),

/***/ "./node_modules/material-ui/Hidden/HiddenCss.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _createBreakpoints = __webpack_require__("./node_modules/material-ui/styles/createBreakpoints.js");

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  var hidden = {
    display: 'none'
  };

  return _createBreakpoints.keys.reduce(function (acc, key) {
    acc['only' + (0, _helpers.capitalize)(key)] = (0, _defineProperty3.default)({}, theme.breakpoints.only(key), hidden);
    acc[key + 'Up'] = (0, _defineProperty3.default)({}, theme.breakpoints.up(key), hidden);
    acc[key + 'Down'] = (0, _defineProperty3.default)({}, theme.breakpoints.down(key), hidden);

    return acc;
  }, {});
};

/**
 * @ignore - internal component.
 */
function HiddenCss(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      lgDown = props.lgDown,
      lgUp = props.lgUp,
      mdDown = props.mdDown,
      mdUp = props.mdUp,
      only = props.only,
      smDown = props.smDown,
      smUp = props.smUp,
      xlDown = props.xlDown,
      xlUp = props.xlUp,
      xsDown = props.xsDown,
      xsUp = props.xsUp,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'lgDown', 'lgUp', 'mdDown', 'mdUp', 'only', 'smDown', 'smUp', 'xlDown', 'xlUp', 'xsDown', 'xsUp']);


   true ? (0, _warning2.default)((0, _keys2.default)(other).length === 0 || (0, _keys2.default)(other).length === 1 && other.hasOwnProperty('ref'), 'Material-UI: unsupported properties received ' + (0, _keys2.default)(other).join(', ') + ' by `<Hidden />`.') : void 0;

  var classNames = [];

  if (className) {
    classNames.push(className);
  }

  for (var i = 0; i < _createBreakpoints.keys.length; i += 1) {
    var breakpoint = _createBreakpoints.keys[i];
    var breakpointUp = props[breakpoint + 'Up'];
    var breakpointDown = props[breakpoint + 'Down'];

    if (breakpointUp) {
      classNames.push(classes[breakpoint + 'Up']);
    }
    if (breakpointDown) {
      classNames.push(classes[breakpoint + 'Down']);
    }
  }

  if (only) {
    var onlyBreakpoints = Array.isArray(only) ? only : [only];
    onlyBreakpoints.forEach(function (breakpoint) {
      classNames.push(classes['only' + (0, _helpers.capitalize)(breakpoint)]);
    });
  }

  return _react2.default.createElement(
    'div',
    { className: classNames.join(' ') },
    children
  );
}

HiddenCss.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for server
   * side rendering.
   */
  implementation: _propTypes2.default.oneOf(['js', 'css']),
  /**
   * If true, screens this size and down will be hidden.
   */
  lgDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  lgUp: _propTypes2.default.bool,
  /**
   * If true, screens this size and down will be hidden.
   */
  mdDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  mdUp: _propTypes2.default.bool,
  /**
   * Hide the given breakpoint(s).
   */
  only: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),
  /**
   * If true, screens this size and down will be hidden.
   */
  smDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  smUp: _propTypes2.default.bool,
  /**
   * If true, screens this size and down will be hidden.
   */
  xlDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  xlUp: _propTypes2.default.bool,
  /**
   * If true, screens this size and down will be hidden.
   */
  xsDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  xsUp: _propTypes2.default.bool
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiHiddenCss' })(HiddenCss);

/***/ }),

/***/ "./node_modules/material-ui/Hidden/HiddenJs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createBreakpoints = __webpack_require__("./node_modules/material-ui/styles/createBreakpoints.js");

var _withWidth = __webpack_require__("./node_modules/material-ui/utils/withWidth.js");

var _withWidth2 = _interopRequireDefault(_withWidth);

var _exactProp = __webpack_require__("./node_modules/material-ui/utils/exactProp.js");

var _exactProp2 = _interopRequireDefault(_exactProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
function HiddenJs(props) {
  var children = props.children,
      only = props.only,
      width = props.width;


  var visible = true;

  // `only` check is faster to get out sooner if used.
  if (only) {
    if (Array.isArray(only)) {
      for (var i = 0; i < only.length; i += 1) {
        var breakpoint = only[i];
        if (width === breakpoint) {
          visible = false;
          break;
        }
      }
    } else if (only && width === only) {
      visible = false;
    }
  }

  // Allow `only` to be combined with other props. If already hidden, no need to check others.
  if (visible) {
    // determine visibility based on the smallest size up
    for (var _i = 0; _i < _createBreakpoints.keys.length; _i += 1) {
      var _breakpoint = _createBreakpoints.keys[_i];
      var breakpointUp = props[_breakpoint + 'Up'];
      var breakpointDown = props[_breakpoint + 'Down'];
      if (breakpointUp && (0, _withWidth.isWidthUp)(_breakpoint, width) || breakpointDown && (0, _withWidth.isWidthDown)(_breakpoint, width)) {
        visible = false;
        break;
      }
    }
  }

  if (!visible) {
    return null;
  }

  return children;
}

HiddenJs.propTypes = {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for server
   * side rendering.
   */
  implementation: _propTypes2.default.oneOf(['js', 'css']),
  /**
   * You can use this property when choosing the `js` implementation with server side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty componenent during the first mount.
   * In some situation you might want to use an heristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * http://caniuse.com/#search=client%20hint
   */
  initialWidth: _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
   * If true, screens this size and down will be hidden.
   */
  lgDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  lgUp: _propTypes2.default.bool,
  /**
   * If true, screens this size and down will be hidden.
   */
  mdDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  mdUp: _propTypes2.default.bool,
  /**
   * Hide the given breakpoint(s).
   */
  only: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),
  /**
   * If true, screens this size and down will be hidden.
   */
  smDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  smUp: _propTypes2.default.bool,
  /**
   * @ignore
   * width prop provided by withWidth decorator.
   */
  width: _propTypes2.default.string.isRequired,
  /**
   * If true, screens this size and down will be hidden.
   */
  xlDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  xlUp: _propTypes2.default.bool,
  /**
   * If true, screens this size and down will be hidden.
   */
  xsDown: _propTypes2.default.bool,
  /**
   * If true, screens this size and up will be hidden.
   */
  xsUp: _propTypes2.default.bool
};

HiddenJs.propTypes = (0, _exactProp2.default)(HiddenJs.propTypes, 'HiddenJs');

exports.default = (0, _withWidth2.default)()(HiddenJs);

/***/ }),

/***/ "./node_modules/material-ui/Hidden/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hidden = __webpack_require__("./node_modules/material-ui/Hidden/Hidden.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hidden).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Icon/Icon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      userSelect: 'none'
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    },
    colorError: {
      color: theme.palette.error.main
    },
    fontSize: {
      width: '1em',
      height: '1em'
    }
  };
};

function Icon(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      fontSize = props.fontSize,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'color', 'fontSize']);


  var className = (0, _classnames2.default)('material-icons', classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes['color' + (0, _helpers.capitalize)(color)], color !== 'inherit'), (0, _defineProperty3.default)(_classNames, classes.fontSize, fontSize), _classNames), classNameProp);

  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({ className: className, 'aria-hidden': 'true' }, other),
    children
  );
}

Icon.propTypes =  true ? {
  /**
   * The name of the icon font ligature.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['inherit', 'secondary', 'action', 'disabled', 'error', 'primary']),
  /**
   * If `true`, the icon size will be determined by the font-size.
   */
  fontSize: _propTypes2.default.bool
} : {};

Icon.defaultProps = {
  color: 'inherit',
  fontSize: false
};

Icon.muiName = 'Icon';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiIcon' })(Icon);

/***/ }),

/***/ "./node_modules/material-ui/Icon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = __webpack_require__("./node_modules/material-ui/Icon/Icon.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Icon).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/MobileStepper/MobileStepper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

var _Progress = __webpack_require__("./node_modules/material-ui/Progress/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: theme.palette.background.default,
      padding: theme.spacing.unit
    },
    positionBottom: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper
    },
    positionTop: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.mobileStepper
    },
    positionStatic: {},
    dots: {
      display: 'flex',
      flexDirection: 'row'
    },
    dot: {
      backgroundColor: theme.palette.action.disabled,
      borderRadius: '50%',
      width: theme.spacing.unit,
      height: theme.spacing.unit,
      margin: '0 2px'
    },
    dotActive: {
      backgroundColor: theme.palette.primary.main
    },
    progress: {
      width: '50%'
    }
  };
}; // @inheritedComponent Paper

function MobileStepper(props) {
  var activeStep = props.activeStep,
      backButton = props.backButton,
      classes = props.classes,
      classNameProp = props.className,
      nextButton = props.nextButton,
      position = props.position,
      steps = props.steps,
      variant = props.variant,
      other = (0, _objectWithoutProperties3.default)(props, ['activeStep', 'backButton', 'classes', 'className', 'nextButton', 'position', 'steps', 'variant']);


  var className = (0, _classnames2.default)(classes.root, classes['position' + (0, _helpers.capitalize)(position)], classNameProp);

  return _react2.default.createElement(
    _Paper2.default,
    (0, _extends3.default)({ square: true, elevation: 0, className: className }, other),
    backButton,
    variant === 'dots' && _react2.default.createElement(
      'div',
      { className: classes.dots },
      [].concat((0, _toConsumableArray3.default)(new Array(steps))).map(function (_, step) {
        var dotClassName = (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.dotActive, step === activeStep), classes.dot);
        // eslint-disable-next-line react/no-array-index-key
        return _react2.default.createElement('div', { key: step, className: dotClassName });
      })
    ),
    variant === 'progress' && _react2.default.createElement(
      'div',
      { className: classes.progress },
      _react2.default.createElement(_Progress.LinearProgress, { variant: 'determinate', value: Math.ceil(activeStep / (steps - 1) * 100) })
    ),
    nextButton
  );
}

MobileStepper.propTypes =  true ? {
  /**
   * Set the active step (zero based index).
   * Defines which dot is highlighted when the variant is 'dots'.
   */
  activeStep: _propTypes2.default.number,
  /**
   * A back button element. For instance, it can be be a `Button` or a `IconButton`.
   */
  backButton: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * A next button element. For instance, it can be be a `Button` or a `IconButton`.
   */
  nextButton: _propTypes2.default.node,
  /**
   * Set the positioning type.
   */
  position: _propTypes2.default.oneOf(['bottom', 'top', 'static']),
  /**
   * The total steps.
   */
  steps: _propTypes2.default.number.isRequired,
  /**
   * The type of mobile stepper to use.
   */
  variant: _propTypes2.default.oneOf(['text', 'dots', 'progress'])
} : {};

MobileStepper.defaultProps = {
  activeStep: 0,
  position: 'bottom',
  variant: 'dots'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiMobileStepper' })(MobileStepper);

/***/ }),

/***/ "./node_modules/material-ui/MobileStepper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MobileStepper = __webpack_require__("./node_modules/material-ui/MobileStepper/MobileStepper.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MobileStepper).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Progress/CircularProgress.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIZE = 50;

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  return (clampedValue - min) / (max - min);
}

function easeOut(t) {
  t = getRelativeValue(t, 0, 1);
  // https://gist.github.com/gre/1650294
  t = (t -= 1) * t * t + 1;
  return t;
}

function easeIn(t) {
  return t * t;
}

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-block'
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    svg: {},
    svgIndeterminate: {
      animation: 'mui-progress-circular-rotate 1.4s linear infinite'
    },
    circle: {
      stroke: 'currentColor',
      strokeLinecap: 'round'
    },
    circleIndeterminate: {
      animation: 'mui-progress-circular-dash 1.4s ease-in-out infinite',
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: '0px' // Add the unit to fix a Edge 16 and below bug.
    },
    '@keyframes mui-progress-circular-rotate': {
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes mui-progress-circular-dash': {
      '0%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '0px'
      },
      '50%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-15px'
      },
      '100%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-120px'
      }
    }
  };
};

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */
function CircularProgress(props) {
  var _classNames2;

  var classes = props.classes,
      className = props.className,
      color = props.color,
      max = props.max,
      min = props.min,
      size = props.size,
      style = props.style,
      thickness = props.thickness,
      value = props.value,
      variant = props.variant,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'color', 'max', 'min', 'size', 'style', 'thickness', 'value', 'variant']);


  var circleStyle = {};
  var rootStyle = {};
  var rootProps = {};

  if (variant === 'determinate' || variant === 'static') {
    var relVal = getRelativeValue(value, min, max) * 100;
    var circumference = 2 * Math.PI * (SIZE / 2 - 5);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(relVal);

    if (variant === 'static') {
      circleStyle.strokeDashoffset = ((100 - relVal) / 100 * circumference).toFixed(3) + 'px';
      rootStyle.transform = 'rotate(-90deg)';
    } else {
      circleStyle.strokeDashoffset = (easeIn((100 - relVal) / 100) * circumference).toFixed(3) + 'px';
      rootStyle.transform = 'rotate(' + (easeOut(relVal / 70) * 270).toFixed(3) + 'deg)';
    }
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes['color' + (0, _helpers.capitalize)(color)], color !== 'inherit'), className),
      style: (0, _extends3.default)({ width: size, height: size }, rootStyle, style),
      role: 'progressbar'
    }, rootProps, other),
    _react2.default.createElement(
      'svg',
      {
        className: (0, _classnames2.default)(classes.svg, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.svgIndeterminate, variant === 'indeterminate'), (0, _defineProperty3.default)(_classNames2, classes.svgStatic, variant === 'static'), _classNames2)),
        viewBox: '0 0 ' + SIZE + ' ' + SIZE
      },
      _react2.default.createElement('circle', {
        className: (0, _classnames2.default)(classes.circle, (0, _defineProperty3.default)({}, classes.circleIndeterminate, variant === 'indeterminate')),
        style: circleStyle,
        cx: SIZE / 2,
        cy: SIZE / 2,
        r: SIZE / 2 - 5,
        fill: 'none',
        strokeWidth: thickness
      })
    )
  );
}

CircularProgress.propTypes =  true ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'inherit']),
  /**
   * The max value of progress in determinate variant.
   */
  max: _propTypes2.default.number,
  /**
   * The min value of progress in determinate variant.
   */
  min: _propTypes2.default.number,
  /**
   * The size of the circle.
   */
  size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * The thickness of the circle.
   */
  thickness: _propTypes2.default.number,
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: _propTypes2.default.number,
  /**
   * The variant of progress indicator. Use indeterminate
   * when there is no progress value.
   */
  variant: _propTypes2.default.oneOf(['determinate', 'indeterminate', 'static'])
} : {};

CircularProgress.defaultProps = {
  color: 'primary',
  max: 100,
  min: 0,
  size: 40,
  thickness: 3.6,
  value: 0,
  variant: 'indeterminate'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCircularProgress', flip: false })(CircularProgress);

/***/ }),

/***/ "./node_modules/material-ui/Progress/LinearProgress.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _colorManipulator = __webpack_require__("./node_modules/material-ui/styles/colorManipulator.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSITION_DURATION = 4; // 400ms

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 5
    },
    primaryColor: {
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.primary.light, 0.6)
    },
    primaryColorBar: {
      backgroundColor: theme.palette.primary.main
    },
    primaryDashed: {
      background: 'radial-gradient(' + (0, _colorManipulator.lighten)(theme.palette.primary.light, 0.6) + ' 0%, ' + (0, _colorManipulator.lighten)(theme.palette.primary.light, 0.6) + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    secondaryColor: {
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.4)
    },
    secondaryColorBar: {
      backgroundColor: theme.palette.secondary.main
    },
    secondaryDashed: {
      background: 'radial-gradient(' + (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.4) + ' 0%, ' + (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.6) + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    bar: {
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      transformOrigin: 'left'
    },
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: 'buffer 3s infinite linear'
    },
    bufferBar2: {
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    rootBuffer: {
      backgroundColor: 'transparent'
    },
    rootQuery: {
      transform: 'rotate(180deg)'
    },
    indeterminateBar1: {
      width: 'auto',
      willChange: 'left, right',
      animation: 'mui-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },
    indeterminateBar2: {
      width: 'auto',
      willChange: 'left, right',
      animation: 'mui-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      animationDelay: '1.15s'
    },
    determinateBar1: {
      willChange: 'transform',
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    bufferBar1: {
      zIndex: 1,
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes mui-indeterminate1': {
      //  |-----|---x-||-----||-----|
      '0%': {
        left: '-35%',
        right: '100%'
      },
      //  |-----|-----||-----||xxxx-|
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes mui-indeterminate2': {
      //  |xxxxx|xxxxx||-----||-----|
      '0%': {
        left: '-200%',
        right: '100%'
      },
      //  |-----|-----||-----||-x----|
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    }
  };
};

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */
function LinearProgress(props) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var classes = props.classes,
      className = props.className,
      color = props.color,
      value = props.value,
      valueBuffer = props.valueBuffer,
      variant = props.variant,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'color', 'value', 'valueBuffer', 'variant']);


  var dashedClass = (0, _classnames2.default)(classes.dashed, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.primaryDashed, color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.secondaryDashed, color === 'secondary'), _classNames));

  var rootClassName = (0, _classnames2.default)(classes.root, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.primaryColor, color === 'primary'), (0, _defineProperty3.default)(_classNames2, classes.secondaryColor, color === 'secondary'), (0, _defineProperty3.default)(_classNames2, classes.rootBuffer, variant === 'buffer'), (0, _defineProperty3.default)(_classNames2, classes.rootQuery, variant === 'query'), _classNames2), className);
  var primaryClassName = (0, _classnames2.default)(classes.bar, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.primaryColorBar, color === 'primary'), (0, _defineProperty3.default)(_classNames3, classes.secondaryColorBar, color === 'secondary'), (0, _defineProperty3.default)(_classNames3, classes.indeterminateBar1, variant === 'indeterminate' || variant === 'query'), (0, _defineProperty3.default)(_classNames3, classes.determinateBar1, variant === 'determinate'), (0, _defineProperty3.default)(_classNames3, classes.bufferBar1, variant === 'buffer'), _classNames3));
  var secondaryClassName = (0, _classnames2.default)(classes.bar, (_classNames4 = {}, (0, _defineProperty3.default)(_classNames4, classes.bufferBar2, variant === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.primaryColorBar, color === 'primary' && variant !== 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.primaryColor, color === 'primary' && variant === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.secondaryColorBar, color === 'secondary' && variant !== 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.secondaryColor, color === 'secondary' && variant === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.indeterminateBar2, variant === 'indeterminate' || variant === 'query'), _classNames4));
  var inlineStyles = { primary: {}, secondary: {} };
  var rootProps = {};

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      inlineStyles.primary.transform = 'scaleX(' + value / 100 + ')';
      rootProps['aria-valuenow'] = Math.round(value);
    } else {
       true ? (0, _warning2.default)(false, 'Material-UI: you need to provide a value property ' + 'when using the determinate or buffer variant of LinearProgress .') : void 0;
    }
  }
  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      inlineStyles.secondary.transform = 'scaleX(' + (valueBuffer || 0) / 100 + ')';
    } else {
       true ? (0, _warning2.default)(false, 'Material-UI: you need to provide a valueBuffer property ' + 'when using the buffer variant of LinearProgress.') : void 0;
    }
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: rootClassName, role: 'progressbar' }, rootProps, other),
    variant === 'buffer' ? _react2.default.createElement('div', { className: dashedClass }) : null,
    _react2.default.createElement('div', { className: primaryClassName, style: inlineStyles.primary }),
    variant === 'determinate' ? null : _react2.default.createElement('div', { className: secondaryClassName, style: inlineStyles.secondary })
  );
}

LinearProgress.propTypes =  true ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['primary', 'secondary']),
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: _propTypes2.default.number,
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: _propTypes2.default.number,
  /**
   * The variant of progress indicator. Use indeterminate or query
   * when there is no progress value.
   */
  variant: _propTypes2.default.oneOf(['determinate', 'indeterminate', 'buffer', 'query'])
} : {};

LinearProgress.defaultProps = {
  color: 'primary',
  variant: 'indeterminate'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiLinearProgress' })(LinearProgress);

/***/ }),

/***/ "./node_modules/material-ui/Progress/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CircularProgress = __webpack_require__("./node_modules/material-ui/Progress/CircularProgress.js");

Object.defineProperty(exports, 'CircularProgress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CircularProgress).default;
  }
});

var _LinearProgress = __webpack_require__("./node_modules/material-ui/Progress/LinearProgress.js");

Object.defineProperty(exports, 'LinearProgress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinearProgress).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Radio/Radio.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _SwitchBase = __webpack_require__("./node_modules/material-ui/internal/SwitchBase.js");

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

var _RadioButtonChecked = __webpack_require__("./node_modules/material-ui/internal/svg-icons/RadioButtonChecked.js");

var _RadioButtonChecked2 = _interopRequireDefault(_RadioButtonChecked);

var _RadioButtonUnchecked = __webpack_require__("./node_modules/material-ui/internal/svg-icons/RadioButtonUnchecked.js");

var _RadioButtonUnchecked2 = _interopRequireDefault(_RadioButtonUnchecked);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    default: {
      color: theme.palette.text.secondary
    },
    checked: {},
    checkedPrimary: {
      color: theme.palette.primary.main
    },
    checkedSecondary: {
      color: theme.palette.secondary.main
    },
    disabled: {
      color: theme.palette.action.disabled
    }
  };
};

var _ref = _react2.default.createElement(_RadioButtonUnchecked2.default, null);

var _ref2 = _react2.default.createElement(_RadioButtonChecked2.default, null);

function Radio(props) {
  var _classNames;

  var classes = props.classes,
      color = props.color,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'color']);

  var checkedClass = (0, _classnames2.default)(classes.checked, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.checkedPrimary, color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.checkedSecondary, color === 'secondary'), _classNames));

  return _react2.default.createElement(_SwitchBase2.default, (0, _extends3.default)({
    type: 'radio',
    icon: _ref,
    checkedIcon: _ref2,
    classes: {
      default: classes.default,
      checked: checkedClass,
      disabled: classes.disabled
    }
  }, other));
}

Radio.propTypes =  true ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['primary', 'secondary']),
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes2.default.node,
  /**
   * The id of the `input` element.
   */
  id: _propTypes2.default.string,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * The input component property `type`.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

Radio.defaultProps = {
  color: 'secondary'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiRadio' })(Radio);

/***/ }),

/***/ "./node_modules/material-ui/Radio/RadioGroup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormGroup = __webpack_require__("./node_modules/material-ui/Form/FormGroup.js");

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent FormGroup

var RadioGroup = function (_React$Component) {
  (0, _inherits3.default)(RadioGroup, _React$Component);

  function RadioGroup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.radios = [], _this.focus = function () {
      if (!_this.radios || !_this.radios.length) {
        return;
      }

      var focusRadios = _this.radios.filter(function (n) {
        return !n.disabled;
      });

      if (!focusRadios.length) {
        return;
      }

      var selectedRadio = (0, _helpers.find)(focusRadios, function (n) {
        return n.checked;
      });

      if (selectedRadio) {
        selectedRadio.focus();
        return;
      }

      focusRadios[0].focus();
    }, _this.handleRadioChange = function (event, checked) {
      if (checked && _this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RadioGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          name = _props.name,
          value = _props.value,
          onChange = _props.onChange,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'name', 'value', 'onChange']);


      this.radios = [];

      return _react2.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({ role: 'radiogroup' }, other),
        _react2.default.Children.map(children, function (child, index) {
          if (!_react2.default.isValidElement(child)) {
            return null;
          }

          return _react2.default.cloneElement(child, {
            key: index,
            name: name,
            inputRef: function inputRef(node) {
              if (node) {
                _this2.radios.push(node);
              }
            },
            checked: value === child.props.value,
            onChange: _this2.handleRadioChange
          });
        })
      );
    }
  }]);
  return RadioGroup;
}(_react2.default.Component);

RadioGroup.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * The name used to reference the value of the control.
   */
  name: _propTypes2.default.string,
  /**
   * @ignore
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {object} event The event source of the callback
   * @param {string} value The `value` of the selected radio button
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * Value of the selected radio button.
   */
  value: _propTypes2.default.string
} : {};

exports.default = RadioGroup;

/***/ }),

/***/ "./node_modules/material-ui/Radio/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Radio = __webpack_require__("./node_modules/material-ui/Radio/Radio.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Radio).default;
  }
});

var _RadioGroup = __webpack_require__("./node_modules/material-ui/Radio/RadioGroup.js");

Object.defineProperty(exports, 'RadioGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadioGroup).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Reboot/Reboot.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/material-ui/styles/index.js");

var _exactProp = __webpack_require__("./node_modules/material-ui/utils/exactProp.js");

var _exactProp2 = _interopRequireDefault(_exactProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased', // Antialiasing.
        MozOsxFontSmoothing: 'grayscale', // Antialiasing.
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: 'border-box'
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      body: {
        margin: 0, // Remove the margin in all browsers.
        backgroundColor: theme.palette.background.default,
        '@media print': {
          // Save printer ink.
          backgroundColor: theme.palette.common.white
        }
      }
    }
  };
};

/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

var Reboot = function (_React$Component) {
  (0, _inherits3.default)(Reboot, _React$Component);

  function Reboot() {
    (0, _classCallCheck3.default)(this, Reboot);
    return (0, _possibleConstructorReturn3.default)(this, (Reboot.__proto__ || (0, _getPrototypeOf2.default)(Reboot)).apply(this, arguments));
  }

  (0, _createClass3.default)(Reboot, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return Reboot;
}(_react2.default.Component);

Reboot.propTypes =  true ? {
  /**
   * You can only provide a single element with react@15, a node with react@16.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  classes: _propTypes2.default.object.isRequired
} : {};

Reboot.propTypes =  true ? (0, _exactProp2.default)(Reboot.propTypes, 'Reboot') : {};

Reboot.defaultProps = {
  children: null
};

exports.default = (0, _styles.withStyles)(styles, { name: 'MuiReboot' })(Reboot);

/***/ }),

/***/ "./node_modules/material-ui/Reboot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reboot = __webpack_require__("./node_modules/material-ui/Reboot/Reboot.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Reboot).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Snackbar/Snackbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends8 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends9 = _interopRequireDefault(_extends8);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _ClickAwayListener = __webpack_require__("./node_modules/material-ui/utils/ClickAwayListener.js");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

var _Slide = __webpack_require__("./node_modules/material-ui/transitions/Slide.js");

var _Slide2 = _interopRequireDefault(_Slide);

var _SnackbarContent = __webpack_require__("./node_modules/material-ui/Snackbar/SnackbarContent.js");

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  var gutter = theme.spacing.unit * 3;
  var top = { top: 0 };
  var bottom = { bottom: 0 };
  var right = { justifyContent: 'flex-end' };
  var left = { justifyContent: 'flex-start' };
  var topSpace = { top: gutter };
  var bottomSpace = { bottom: gutter };
  var rightSpace = { right: gutter };
  var leftSpace = { left: gutter };
  var center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };

  return {
    root: {
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    anchorTopCenter: (0, _extends9.default)({}, top, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({}, center))),
    anchorBottomCenter: (0, _extends9.default)({}, bottom, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({}, center))),
    anchorTopRight: (0, _extends9.default)({}, top, right, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      left: 'auto'
    }, topSpace, rightSpace))),
    anchorBottomRight: (0, _extends9.default)({}, bottom, right, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      left: 'auto'
    }, bottomSpace, rightSpace))),
    anchorTopLeft: (0, _extends9.default)({}, top, left, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      right: 'auto'
    }, topSpace, leftSpace))),
    anchorBottomLeft: (0, _extends9.default)({}, bottom, left, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      right: 'auto'
    }, bottomSpace, leftSpace)))
  };
};

var Snackbar = function (_React$Component) {
  (0, _inherits3.default)(Snackbar, _React$Component);

  function Snackbar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Snackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Snackbar.__proto__ || (0, _getPrototypeOf2.default)(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // Used to only render active snackbars.
      exited: false
    }, _this.timerAutoHide = null, _this.handleMouseEnter = function (event) {
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
      _this.handlePause();
    }, _this.handleMouseLeave = function (event) {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
      _this.handleResume();
    }, _this.handleClickAway = function (event) {
      if (_this.props.onClose) {
        _this.props.onClose(event, 'clickaway');
      }
    }, _this.handlePause = function () {
      clearTimeout(_this.timerAutoHide);
    }, _this.handleResume = function () {
      if (_this.props.autoHideDuration != null) {
        if (_this.props.resumeHideDuration !== undefined) {
          _this.setAutoHideTimer(_this.props.resumeHideDuration);
          return;
        }
        _this.setAutoHideTimer((_this.props.autoHideDuration || 0) * 0.5);
      }
    }, _this.handleExited = function () {
      _this.setState({ exited: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Snackbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.open) {
        this.setState({ exited: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.open) {
        this.setAutoHideTimer();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open) {
        this.setState({ exited: false });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open !== this.props.open) {
        if (this.props.open) {
          this.setAutoHideTimer();
        } else {
          clearTimeout(this.timerAutoHide);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerAutoHide);
    }

    // Timer that controls delay before snackbar auto hides

  }, {
    key: 'setAutoHideTimer',
    value: function setAutoHideTimer() {
      var _this2 = this;

      var autoHideDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.props.onClose || this.props.autoHideDuration == null) {
        return;
      }

      clearTimeout(this.timerAutoHide);
      this.timerAutoHide = setTimeout(function () {
        if (!_this2.props.onClose || _this2.props.autoHideDuration == null) {
          return;
        }

        _this2.props.onClose(null, 'timeout');
      }, autoHideDuration || this.props.autoHideDuration || 0);
    }

    // Pause the timer when the user is interacting with the Snackbar
    // or when the user hide the window.


    // Restart the timer when the user is no longer interacting with the Snackbar
    // or when the window is shown back.

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          _props$anchorOrigin = _props.anchorOrigin,
          vertical = _props$anchorOrigin.vertical,
          horizontal = _props$anchorOrigin.horizontal,
          autoHideDuration = _props.autoHideDuration,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disableWindowBlurListener = _props.disableWindowBlurListener,
          message = _props.message,
          onClose = _props.onClose,
          onEnter = _props.onEnter,
          onEntered = _props.onEntered,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExited = _props.onExited,
          onExiting = _props.onExiting,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          open = _props.open,
          resumeHideDuration = _props.resumeHideDuration,
          SnackbarContentProps = _props.SnackbarContentProps,
          TransitionProp = _props.transition,
          transitionDuration = _props.transitionDuration,
          other = (0, _objectWithoutProperties3.default)(_props, ['action', 'anchorOrigin', 'autoHideDuration', 'children', 'classes', 'className', 'disableWindowBlurListener', 'message', 'onClose', 'onEnter', 'onEntered', 'onEntering', 'onExit', 'onExited', 'onExiting', 'onMouseEnter', 'onMouseLeave', 'open', 'resumeHideDuration', 'SnackbarContentProps', 'transition', 'transitionDuration']);


      if (!open && this.state.exited) {
        return null;
      }

      var transitionProps = {};

      // The provided transition might not support the direction property.
      if (TransitionProp === _Slide2.default) {
        transitionProps.direction = vertical === 'top' ? 'down' : 'up';
      }

      return _react2.default.createElement(
        _reactEventListener2.default,
        {
          target: 'window',
          onFocus: disableWindowBlurListener ? undefined : this.handleResume,
          onBlur: disableWindowBlurListener ? undefined : this.handlePause
        },
        _react2.default.createElement(
          _ClickAwayListener2.default,
          { onClickAway: this.handleClickAway },
          _react2.default.createElement(
            'div',
            (0, _extends9.default)({
              className: (0, _classnames2.default)(classes.root, classes['anchor' + (0, _helpers.capitalize)(vertical) + (0, _helpers.capitalize)(horizontal)], className),
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave
            }, other),
            _react2.default.createElement(
              TransitionProp,
              (0, _extends9.default)({
                appear: true,
                'in': open,
                onEnter: onEnter,
                onEntered: onEntered,
                onEntering: onEntering,
                onExit: onExit,
                onExited: (0, _helpers.createChainedFunction)(this.handleExited, onExited),
                onExiting: onExiting,
                timeout: transitionDuration
              }, transitionProps),
              children || _react2.default.createElement(_SnackbarContent2.default, (0, _extends9.default)({ message: message, action: action }, SnackbarContentProps))
            )
          )
        )
      );
    }
  }]);
  return Snackbar;
}(_react2.default.Component);

Snackbar.propTypes =  true ? {
  /**
   * The action to display.
   */
  action: _propTypes2.default.node,
  /**
   * The anchor of the `Snackbar`.
   */
  anchorOrigin: _propTypes2.default.shape({
    horizontal: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['left', 'center', 'right'])]),
    vertical: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['top', 'center', 'bottom'])])
  }),
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   */
  autoHideDuration: _propTypes2.default.number,
  /**
   * If you wish the take control over the children of the component you can use this property.
   * When used, you replace the `SnackbarContent` component with the children.
   */
  children: _propTypes2.default.element,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   */
  disableWindowBlurListener: _propTypes2.default.bool,
  /**
   * When displaying multiple consecutive Snackbars from a parent rendering a single
   * <Snackbar/>, add the key property to ensure independent treatment of each message.
   * e.g. <Snackbar key={message} />, otherwise, the message may update-in-place and
   * features such as autoHideDuration may be canceled.
   */
  key: _propTypes2.default.any,
  /**
   * The message to display.
   */
  message: _propTypes2.default.node,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired before the transition is entering.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the transition has entered.
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired when the transition is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired before the transition is exiting.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the transition has exited.
   */
  onExited: _propTypes2.default.func,
  /**
   * Callback fired when the transition is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * @ignore
   */
  onMouseEnter: _propTypes2.default.func,
  /**
   * @ignore
   */
  onMouseLeave: _propTypes2.default.func,
  /**
   * If true, `Snackbar` is open.
   */
  open: _propTypes2.default.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` property isn't specified, it does nothing.
   * If `autoHideDuration` property is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: _propTypes2.default.number,
  /**
   * Properties applied to the `SnackbarContent` element.
   */
  SnackbarContentProps: _propTypes2.default.object,
  /**
   * Transition component.
   */
  transition: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })])
} : {};

Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  disableWindowBlurListener: false,
  transition: _Slide2.default,
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

exports.default = (0, _withStyles2.default)(styles, { flip: false, name: 'MuiSnackbar' })(Snackbar);

/***/ }),

/***/ "./node_modules/material-ui/Snackbar/SnackbarContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__("./node_modules/material-ui/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _colorManipulator = __webpack_require__("./node_modules/material-ui/styles/colorManipulator.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  var _root;

  var emphasis = theme.palette.type === 'light' ? 0.8 : 0.98;
  var backgroundColor = (0, _colorManipulator.emphasize)(theme.palette.background.default, emphasis);

  return {
    root: (_root = {
      pointerEvents: 'initial',
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px ' + theme.spacing.unit * 3 + 'px'
    }, (0, _defineProperty3.default)(_root, theme.breakpoints.up('md'), {
      minWidth: 288,
      maxWidth: 568,
      borderRadius: 2
    }), (0, _defineProperty3.default)(_root, theme.breakpoints.down('sm'), {
      flexGrow: 1
    }), _root),
    message: {
      padding: theme.spacing.unit + 'px 0'
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: theme.spacing.unit * 3,
      marginRight: -theme.spacing.unit
    }
  };
}; // @inheritedComponent Paper

function SnackbarContent(props) {
  var action = props.action,
      classes = props.classes,
      className = props.className,
      message = props.message,
      other = (0, _objectWithoutProperties3.default)(props, ['action', 'classes', 'className', 'message']);


  return _react2.default.createElement(
    _Paper2.default,
    (0, _extends3.default)({
      component: _Typography2.default,
      headlineMapping: {
        body1: 'div'
      },
      role: 'alertdialog',
      square: true,
      elevation: 6,
      className: (0, _classnames2.default)(classes.root, className)
    }, other),
    _react2.default.createElement(
      'div',
      { className: classes.message },
      message
    ),
    action ? _react2.default.createElement(
      'div',
      { className: classes.action },
      action
    ) : null
  );
}

SnackbarContent.propTypes =  true ? {
  /**
   * The action to display.
   */
  action: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The message to display.
   */
  message: _propTypes2.default.node
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSnackbarContent' })(SnackbarContent);

/***/ }),

/***/ "./node_modules/material-ui/Snackbar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Snackbar = __webpack_require__("./node_modules/material-ui/Snackbar/Snackbar.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Snackbar).default;
  }
});

var _SnackbarContent = __webpack_require__("./node_modules/material-ui/Snackbar/SnackbarContent.js");

Object.defineProperty(exports, 'SnackbarContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SnackbarContent).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Stepper/Step.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {},
    horizontal: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      '&:first-child': {
        paddingLeft: 0
      },
      '&:last-child': {
        paddingRight: 0
      }
    },
    vertical: {},
    alternativeLabel: {
      flex: 1,
      position: 'relative'
    }
  };
};

function Step(props) {
  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      connector = props.connector,
      disabled = props.disabled,
      index = props.index,
      last = props.last,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'connector', 'disabled', 'index', 'last', 'orientation']);


  var className = (0, _classnames2.default)(classes.root, classes[orientation], (0, _defineProperty3.default)({}, classes.alternativeLabel, alternativeLabel), classNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    _react2.default.Children.map(children, function (child) {
      return _react2.default.cloneElement(child, (0, _extends3.default)({
        active: active,
        alternativeLabel: alternativeLabel,
        completed: completed,
        disabled: disabled,
        icon: index + 1,
        last: last,
        orientation: orientation
      }, child.props));
    }),
    connector && alternativeLabel && !last && _react2.default.cloneElement(connector, { orientation: orientation, alternativeLabel: alternativeLabel })
  );
}

Step.propTypes =  true ? {
  /**
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes2.default.bool,
  /**
   * @ignore
   * Passed down from Stepper if alternativeLabel is also set.
   */
  connector: _propTypes2.default.element,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @ignore
   * Used internally for numbering.
   */
  index: _propTypes2.default.number,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

Step.defaultProps = {
  active: false,
  completed: false,
  disabled: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStep' })(Step);

/***/ }),

/***/ "./node_modules/material-ui/Stepper/StepButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__("./node_modules/material-ui/ButtonBase/index.js");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _StepLabel = __webpack_require__("./node_modules/material-ui/Stepper/StepLabel.js");

var _StepLabel2 = _interopRequireDefault(_StepLabel);

var _reactHelpers = __webpack_require__("./node_modules/material-ui/utils/reactHelpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      padding: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 2 + 'px',
      margin: -theme.spacing.unit * 3 + 'px ' + -theme.spacing.unit * 2 + 'px',
      boxSizing: 'content-box'
    }
  };
}; // @inheritedComponent ButtonBase

function StepButton(props) {
  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      disabled = props.disabled,
      icon = props.icon,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'disabled', 'icon', 'last', 'optional', 'orientation']);


  var childProps = {
    active: active,
    alternativeLabel: alternativeLabel,
    completed: completed,
    disabled: disabled,
    icon: icon,
    optional: optional,
    orientation: orientation
  };
  var child = (0, _reactHelpers.isMuiElement)(children, ['StepLabel']) ? _react2.default.cloneElement(children, childProps) : _react2.default.createElement(
    _StepLabel2.default,
    childProps,
    children
  );

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({ disabled: disabled, className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
    child
  );
}

StepButton.propTypes =  true ? {
  /**
   * @ignore
   * Passed in via `Step` - passed through to `StepLabel`.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * Sets completed styling. Is passed to StepLabel.
   */
  completed: _propTypes2.default.bool,
  /**
   * @ignore
   * Disables the button and sets disabled styling. Is passed to StepLabel.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * The optional node to display.
   */
  optional: _propTypes2.default.node,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepButton' })(StepButton);

/***/ }),

/***/ "./node_modules/material-ui/Stepper/StepConnector.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      flex: '1 1 auto'
    },
    horizontal: {},
    vertical: {
      marginLeft: 12, // half icon
      padding: '0 0 ' + theme.spacing.unit + 'px'
    },
    alternativeLabel: {
      position: 'absolute',
      top: theme.spacing.unit + 4,
      left: 'calc(50% + 20px)',
      right: 'calc(-50% + 20px)'
    },
    line: {
      display: 'block',
      borderColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },
    lineHorizontal: {
      borderTopStyle: 'solid',
      borderTopWidth: 1
    },
    lineVertical: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      minHeight: theme.spacing.unit * 3
    }
  };
};

/**
 * @ignore - internal component.
 */
function StepConnector(props) {
  var _classNames2;

  var alternativeLabel = props.alternativeLabel,
      classNameProp = props.className,
      classes = props.classes,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['alternativeLabel', 'className', 'classes', 'orientation']);


  var className = (0, _classnames2.default)(classes.root, classes[orientation], (0, _defineProperty3.default)({}, classes.alternativeLabel, alternativeLabel), classNameProp);
  var lineClassName = (0, _classnames2.default)(classes.line, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.lineHorizontal, orientation === 'horizontal'), (0, _defineProperty3.default)(_classNames2, classes.lineVertical, orientation === 'vertical'), _classNames2));

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    _react2.default.createElement('span', { className: lineClassName })
  );
}

StepConnector.propTypes =  true ? {
  /**
   * @ignore
   * Set internally by Step when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Useful to extend the style applied to the component.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

StepConnector.defaultProps = {
  alternativeLabel: false,
  orientation: 'horizontal'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepConnector' })(StepConnector);

/***/ }),

/***/ "./node_modules/material-ui/Stepper/StepContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Collapse = __webpack_require__("./node_modules/material-ui/transitions/Collapse.js");

var _Collapse2 = _interopRequireDefault(_Collapse);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing.unit,
      marginLeft: 12, // half icon
      paddingLeft: theme.spacing.unit + 12, // margin + half icon
      paddingRight: theme.spacing.unit,
      borderLeft: '1px solid ' + (theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600])
    },
    last: {
      borderLeft: 'none'
    },
    transition: {}
  };
};

function StepContent(props) {
  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      Transition = props.transition,
      transitionDuration = props.transitionDuration,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'last', 'optional', 'orientation', 'transition', 'transitionDuration']);


   true ? (0, _warning2.default)(orientation === 'vertical', 'Material-UI: <StepContent /> is only designed for use with the vertical stepper.') : void 0;

  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.last, last), classNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    _react2.default.createElement(
      Transition,
      {
        'in': active,
        className: classes.transition,
        timeout: transitionDuration,
        unmountOnExit: true
      },
      children
    )
  );
}

StepContent.propTypes =  true ? {
  /**
   * @ignore
   * Expands the content.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Step when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Step content.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  completed: _propTypes2.default.bool,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Step when it's supplied with the optional property.
   */
  optional: _propTypes2.default.bool,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  /**
   * Collapse component.
   */
  transition: _propTypes2.default.func,
  /**
   * Adjust the duration of the content expand transition.
   * Passed as a property to the transition component.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number }), _propTypes2.default.oneOf(['auto'])])
} : {};

StepContent.defaultProps = {
  transition: _Collapse2.default,
  transitionDuration: 'auto'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepContent' })(StepContent);

/***/ }),

/***/ "./node_modules/material-ui/Stepper/StepIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _CheckCircle = __webpack_require__("./node_modules/material-ui/internal/svg-icons/CheckCircle.js");

var _CheckCircle2 = _interopRequireDefault(_CheckCircle);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _StepPositionIcon = __webpack_require__("./node_modules/material-ui/Stepper/StepPositionIcon.js");

var _StepPositionIcon2 = _interopRequireDefault(_StepPositionIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'block'
    },
    completed: {
      color: theme.palette.primary.main
    }
  };
};

function StepIcon(props) {
  var completed = props.completed,
      icon = props.icon,
      active = props.active,
      classes = props.classes;


  if (typeof icon === 'number' || typeof icon === 'string') {
    if (completed) {
      return _react2.default.createElement(_CheckCircle2.default, { className: (0, _classnames2.default)(classes.root, classes.completed) });
    }
    return _react2.default.createElement(_StepPositionIcon2.default, { className: classes.root, position: icon, active: active });
  }

  return icon;
}

StepIcon.propTypes =  true ? {
  /**
   * Whether this step is active.
   */
  active: _propTypes2.default.bool,
  /**
   * Classses for component style customizations.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes2.default.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: _propTypes2.default.node.isRequired
} : {};

StepIcon.defaultProps = {
  active: false,
  completed: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepIcon' })(StepIcon);

/***/ }),

/***/ "./node_modules/material-ui/Stepper/StepLabel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Typography = __webpack_require__("./node_modules/material-ui/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _StepIcon = __webpack_require__("./node_modules/material-ui/Stepper/StepIcon.js");

var _StepIcon2 = _interopRequireDefault(_StepIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    horizontal: {},
    vertical: {},
    alternativeLabel: {
      flexDirection: 'column'
    },
    disabled: {
      cursor: 'default'
    },
    label: {
      color: theme.palette.text.secondary
    },
    labelActive: {
      color: theme.palette.text.primary,
      fontWeight: 500
    },
    labelCompleted: {
      color: theme.palette.text.primary,
      fontWeight: 500
    },
    labelAlternativeLabel: {
      textAlign: 'center',
      marginTop: theme.spacing.unit * 2
    },
    iconContainer: {},
    iconContainerNoAlternative: {
      paddingRight: theme.spacing.unit
    },
    labelContainer: {
      width: '100%'
    }
  };
};

function StepLabel(props) {
  var _classNames, _classNames3;

  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      disabled = props.disabled,
      icon = props.icon,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'disabled', 'icon', 'last', 'optional', 'orientation']);


  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, classes[orientation], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.alternativeLabel, alternativeLabel), _classNames), classNameProp)
    }, other),
    icon && _react2.default.createElement(
      'span',
      {
        className: (0, _classnames2.default)(classes.iconContainer, (0, _defineProperty3.default)({}, classes.iconContainerNoAlternative, !alternativeLabel))
      },
      _react2.default.createElement(_StepIcon2.default, {
        completed: completed,
        active: active,
        icon: icon,
        alternativeLabel: alternativeLabel
      })
    ),
    _react2.default.createElement(
      'span',
      { className: classes.labelContainer },
      _react2.default.createElement(
        _Typography2.default,
        {
          variant: 'body1',
          component: 'span',
          className: (0, _classnames2.default)(classes.label, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.labelAlternativeLabel, alternativeLabel), (0, _defineProperty3.default)(_classNames3, classes.labelCompleted, completed), (0, _defineProperty3.default)(_classNames3, classes.labelActive, active), _classNames3))
        },
        children
      ),
      optional
    )
  );
}

StepLabel.propTypes =  true ? {
  /**
   * @ignore
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * In most cases will simply be a string containing a title for the label.
   */
  children: _propTypes2.default.node,
  /**
   * Custom styles for component.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes2.default.bool,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepLabelButton` is a child of `StepLabel`. Is passed to child components.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the default icon.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * The optional node to display.
   */
  optional: _propTypes2.default.node,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

StepLabel.defaultProps = {
  active: false,
  alternativeLabel: false,
  completed: false,
  disabled: false,
  last: false,
  orientation: 'horizontal'
};

StepLabel.muiName = 'StepLabel';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepLabel' })(StepLabel);

/***/ }),

/***/ "./node_modules/material-ui/Stepper/StepPositionIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      color: theme.palette.text.disabled
    },
    active: {
      color: theme.palette.primary.main
    },
    text: {
      fill: theme.palette.primary.contrastText,
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.fontFamily
    }
  };
};

/**
 * @ignore - internal component.
 */

var _ref = _react2.default.createElement('circle', { cx: '12', cy: '12', r: '12' });

function StepPositionIcon(props) {
  var position = props.position,
      classes = props.classes,
      classNameProp = props.className,
      active = props.active;

  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.active, active), classNameProp);

  return _react2.default.createElement(
    _SvgIcon2.default,
    { className: className },
    _ref,
    _react2.default.createElement(
      'text',
      { className: classes.text, x: '12', y: '16', textAnchor: 'middle' },
      position
    )
  );
}

StepPositionIcon.propTypes =  true ? {
  /**
   * Whether this step is active.
   */
  active: _propTypes2.default.bool,
  /**
   * Classses for component style customizations.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The step position as a number.
   */
  position: _propTypes2.default.node
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepPosition' })(StepPositionIcon);

/***/ }),

/***/ "./node_modules/material-ui/Stepper/Stepper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _StepConnector = __webpack_require__("./node_modules/material-ui/Stepper/StepConnector.js");

var _StepConnector2 = _interopRequireDefault(_StepConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      padding: theme.spacing.unit * 3
    },
    horizontal: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    vertical: {
      flexDirection: 'column'
    },
    alternativeLabel: {
      alignItems: 'flex-start'
    }
  };
};

function Stepper(props) {
  var activeStep = props.activeStep,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      connectorProp = props.connector,
      nonLinear = props.nonLinear,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['activeStep', 'alternativeLabel', 'children', 'classes', 'className', 'connector', 'nonLinear', 'orientation']);


  var className = (0, _classnames2.default)(classes.root, classes[orientation], (0, _defineProperty3.default)({}, classes.alternativeLabel, alternativeLabel), classNameProp);

  var connector = _react2.default.isValidElement(connectorProp) ? _react2.default.cloneElement(connectorProp, { orientation: orientation }) : null;
  var childrenArray = _react2.default.Children.toArray(children);
  var steps = childrenArray.map(function (step, index) {
    var controlProps = {
      index: index,
      orientation: orientation,
      active: false,
      completed: false,
      disabled: false,
      last: index + 1 === childrenArray.length,
      alternativeLabel: alternativeLabel,
      connector: connectorProp
    };

    if (activeStep === index) {
      controlProps.active = true;
    } else if (!nonLinear && activeStep > index) {
      controlProps.completed = true;
    } else if (!nonLinear && activeStep < index) {
      controlProps.disabled = true;
    }

    return [!alternativeLabel && connector && index > 0 && _react2.default.cloneElement(connector, {
      key: index // eslint-disable-line react/no-array-index-key
    }), _react2.default.cloneElement(step, (0, _extends3.default)({}, controlProps, step.props))];
  });

  return _react2.default.createElement(
    _Paper2.default,
    (0, _extends3.default)({ square: true, elevation: 0, className: className }, other),
    steps
  );
}

Stepper.propTypes =  true ? {
  /**
   * Set the active step (zero based index).
   */
  activeStep: _propTypes2.default.number,
  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Two or more `<Step />` components.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * A component to be placed between each step.
   */
  connector: _propTypes2.default.element,
  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   */
  nonLinear: _propTypes2.default.bool,
  /**
   * The stepper orientation (layout flow direction).
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

Stepper.defaultProps = {
  activeStep: 0,
  alternativeLabel: false,
  connector: _react2.default.createElement(_StepConnector2.default, null),
  nonLinear: false,
  orientation: 'horizontal'
};

Stepper.muiName = 'Stepper';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepper' })(Stepper);

/***/ }),

/***/ "./node_modules/material-ui/Stepper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stepper = __webpack_require__("./node_modules/material-ui/Stepper/Stepper.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Stepper).default;
  }
});

var _Step = __webpack_require__("./node_modules/material-ui/Stepper/Step.js");

Object.defineProperty(exports, 'Step', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Step).default;
  }
});

var _StepButton = __webpack_require__("./node_modules/material-ui/Stepper/StepButton.js");

Object.defineProperty(exports, 'StepButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StepButton).default;
  }
});

var _StepContent = __webpack_require__("./node_modules/material-ui/Stepper/StepContent.js");

Object.defineProperty(exports, 'StepContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StepContent).default;
  }
});

var _StepIcon = __webpack_require__("./node_modules/material-ui/Stepper/StepIcon.js");

Object.defineProperty(exports, 'StepIcon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StepIcon).default;
  }
});

var _StepLabel = __webpack_require__("./node_modules/material-ui/Stepper/StepLabel.js");

Object.defineProperty(exports, 'StepLabel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StepLabel).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Switch/Switch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SwitchBase = __webpack_require__("./node_modules/material-ui/internal/SwitchBase.js");

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-flex',
      width: 62,
      position: 'relative',
      flexShrink: 0,
      // For correct alignment with the text.
      verticalAlign: 'middle'
    },
    bar: {
      borderRadius: 7,
      display: 'block',
      position: 'absolute',
      width: 34,
      height: 14,
      top: '50%',
      marginTop: -7,
      left: '50%',
      marginLeft: -17,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    },
    icon: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },
    iconChecked: {
      boxShadow: theme.shadows[2]
    },
    // For SwitchBase
    default: {
      zIndex: 1,
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    checked: {
      transform: 'translateX(14px)',
      '& + $bar': {
        opacity: 0.5
      }
    },
    checkedPrimary: {
      color: theme.palette.primary.main,
      '& + $bar': {
        backgroundColor: theme.palette.primary.main
      }
    },
    checkedSecondary: {
      color: theme.palette.secondary.main,
      '& + $bar': {
        backgroundColor: theme.palette.secondary.main
      }
    },
    disabled: {
      color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
      '& + $bar': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      },
      '& $icon': {
        boxShadow: theme.shadows[1]
      }
    }
  };
};

function Switch(props) {
  var _classNames;

  var classes = props.classes,
      className = props.className,
      color = props.color,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'color']);

  var icon = _react2.default.createElement('span', { className: classes.icon });
  var checkedIcon = _react2.default.createElement('span', { className: (0, _classnames2.default)(classes.icon, classes.iconChecked) });
  var checkedClass = (0, _classnames2.default)(classes.checked, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.checkedPrimary, color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.checkedSecondary, color === 'secondary'), _classNames));

  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)(classes.root, className) },
    _react2.default.createElement(_SwitchBase2.default, (0, _extends3.default)({
      icon: icon,
      classes: {
        default: classes.default,
        checked: checkedClass,
        disabled: classes.disabled
      },
      checkedIcon: checkedIcon
    }, other)),
    _react2.default.createElement('span', { className: classes.bar })
  );
}

Switch.propTypes =  true ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes2.default.oneOf(['primary', 'secondary']),
  /**
   * @ignore
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes2.default.node,
  /**
   * The id of the `input` element.
   */
  id: _propTypes2.default.string,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * The input component property `type`.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

Switch.defaultProps = {
  color: 'secondary'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSwitch' })(Switch);

/***/ }),

/***/ "./node_modules/material-ui/Switch/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Switch = __webpack_require__("./node_modules/material-ui/Switch/Switch.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Switch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Tabs/Tab.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends4 = _interopRequireDefault(_extends3);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__("./node_modules/material-ui/ButtonBase/index.js");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent ButtonBase

var styles = exports.styles = function styles(theme) {
  return {
    root: (0, _extends4.default)({}, theme.typography.button, (0, _defineProperty3.default)({
      maxWidth: 264,
      position: 'relative',
      minWidth: 72,
      padding: 0,
      height: 48,
      flex: 'none',
      overflow: 'hidden'
    }, theme.breakpoints.up('md'), {
      minWidth: 160
    })),
    rootLabelIcon: {
      height: 72
    },
    rootInherit: {
      color: 'inherit',
      opacity: 0.7
    },
    rootPrimary: {
      color: theme.palette.text.secondary
    },
    rootPrimarySelected: {
      color: theme.palette.primary.main
    },
    rootPrimaryDisabled: {
      color: theme.palette.text.disabled
    },
    rootSecondary: {
      color: theme.palette.text.secondary
    },
    rootSecondarySelected: {
      color: theme.palette.secondary.main
    },
    rootSecondaryDisabled: {
      color: theme.palette.text.disabled
    },
    rootInheritSelected: {
      opacity: 1
    },
    rootInheritDisabled: {
      opacity: 0.4
    },
    fullWidth: {
      flexGrow: 1
    },
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    },
    labelContainer: (0, _defineProperty3.default)({
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 12,
      paddingRight: 12
    }, theme.breakpoints.up('md'), {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3
    }),
    label: (0, _defineProperty3.default)({
      fontSize: theme.typography.pxToRem(theme.typography.fontSize),
      whiteSpace: 'normal'
    }, theme.breakpoints.up('md'), {
      fontSize: theme.typography.pxToRem(theme.typography.fontSize - 1)
    }),
    labelWrapped: (0, _defineProperty3.default)({}, theme.breakpoints.down('sm'), {
      fontSize: theme.typography.pxToRem(theme.typography.fontSize - 2)
    })
  };
};

var Tab = function (_React$Component) {
  (0, _inherits3.default)(Tab, _React$Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      wrappedText: false
    }, _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          onClick = _this$props.onClick;


      if (onChange) {
        onChange(event, value);
      }

      if (onClick) {
        onClick(event);
      }
    }, _this.label = undefined, _this.checkTextWrap = function () {
      if (_this.label) {
        var wrappedText = _this.label.getClientRects().length > 1;
        if (_this.state.wrappedText !== wrappedText) {
          _this.setState({ wrappedText: wrappedText });
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tab, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkTextWrap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.wrappedText === prevState.wrappedText) {
        /**
         * At certain text and tab lengths, a larger font size may wrap to two lines while the smaller
         * font size still only requires one line.  This check will prevent an infinite render loop
         * fron occurring in that scenario.
         */
        this.checkTextWrap();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _classNames2;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          disabled = _props.disabled,
          fullWidth = _props.fullWidth,
          icon = _props.icon,
          indicator = _props.indicator,
          labelProp = _props.label,
          onChange = _props.onChange,
          selected = _props.selected,
          styleProp = _props.style,
          textColor = _props.textColor,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'disabled', 'fullWidth', 'icon', 'indicator', 'label', 'onChange', 'selected', 'style', 'textColor', 'value']);


      var label = void 0;

      if (labelProp !== undefined) {
        label = _react2.default.createElement(
          'span',
          { className: classes.labelContainer },
          _react2.default.createElement(
            'span',
            {
              className: (0, _classnames2.default)(classes.label, (0, _defineProperty3.default)({}, classes.labelWrapped, this.state.wrappedText)),
              ref: function ref(node) {
                _this2.label = node;
              }
            },
            labelProp
          )
        );
      }

      var className = (0, _classnames2.default)(classes.root, classes['root' + (0, _helpers.capitalize)(textColor)], (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes['root' + (0, _helpers.capitalize)(textColor) + 'Disabled'], disabled), (0, _defineProperty3.default)(_classNames2, classes['root' + (0, _helpers.capitalize)(textColor) + 'Selected'], selected), (0, _defineProperty3.default)(_classNames2, classes.rootLabelIcon, icon && label), (0, _defineProperty3.default)(_classNames2, classes.fullWidth, fullWidth), _classNames2), classNameProp);

      var style = {};

      if (textColor !== 'secondary' && textColor !== 'inherit') {
        style.color = textColor;
      }

      style = (0, _keys2.default)(style).length > 0 ? (0, _extends4.default)({}, style, styleProp) : styleProp;

      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends4.default)({
          focusRipple: true,
          className: className,
          style: style,
          role: 'tab',
          'aria-selected': selected,
          disabled: disabled
        }, other, {
          onClick: this.handleChange
        }),
        _react2.default.createElement(
          'span',
          { className: classes.wrapper },
          icon,
          label
        ),
        indicator
      );
    }
  }]);
  return Tab;
}(_react2.default.Component);

Tab.propTypes =  true ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the tab will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @ignore
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The icon element.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   * For server side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: _propTypes2.default.node,
  /**
   * The label element.
   */
  label: _propTypes2.default.node,
  /**
   * @ignore
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   */
  selected: _propTypes2.default.bool,
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   */
  textColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.oneOf(['secondary', 'primary', 'inherit'])]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: _propTypes2.default.any
} : {};

Tab.defaultProps = {
  disabled: false,
  textColor: 'inherit'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTab' })(Tab);

/***/ }),

/***/ "./node_modules/material-ui/Tabs/TabIndicator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'absolute',
      height: 2,
      bottom: 0,
      width: '100%',
      transition: theme.transitions.create(),
      willChange: 'left, width'
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main
    }
  };
};

/**
 * @ignore - internal component.
 */
function TabIndicator(props) {
  var classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      styleProp = props.style;

  var colorPredefined = ['primary', 'secondary'].indexOf(color) !== -1;
  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes['color' + (0, _helpers.capitalize)(color)], colorPredefined), classNameProp);

  var style = colorPredefined ? styleProp : (0, _extends3.default)({}, styleProp, {
    backgroundColor: color
  });

  return _react2.default.createElement('span', { className: className, style: style });
}

TabIndicator.propTypes =  true ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * The color of the tab indicator.
   */
  color: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.oneOf(['primary', 'secondary'])]),
  /**
   * @ignore
   * The style of the root element.
   */
  style: _propTypes2.default.object
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTabIndicator' })(TabIndicator);

/***/ }),

/***/ "./node_modules/material-ui/Tabs/TabScrollButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _KeyboardArrowLeft = __webpack_require__("./node_modules/material-ui/internal/svg-icons/KeyboardArrowLeft.js");

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = __webpack_require__("./node_modules/material-ui/internal/svg-icons/KeyboardArrowRight.js");

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__("./node_modules/material-ui/ButtonBase/index.js");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      color: 'inherit',
      flex: '0 0 ' + theme.spacing.unit * 7 + 'px'
    }
  };
};

/**
 * @ignore - internal component.
 */

var _ref = _react2.default.createElement(_KeyboardArrowLeft2.default, null);

var _ref2 = _react2.default.createElement(_KeyboardArrowRight2.default, null);

function TabScrollButton(props) {
  var classes = props.classes,
      classNameProp = props.className,
      direction = props.direction,
      onClick = props.onClick,
      visible = props.visible,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'direction', 'onClick', 'visible']);


  var className = (0, _classnames2.default)(classes.root, classNameProp);

  if (!visible) {
    return _react2.default.createElement('div', { className: className });
  }

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({ className: className, onClick: onClick, tabIndex: -1 }, other),
    direction === 'left' ? _ref : _ref2
  );
}

TabScrollButton.propTypes =  true ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Which direction should the button indicate?
   */
  direction: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Callback to execute for button press.
   */
  onClick: _propTypes2.default.func,
  /**
   * Should the button be present or just consume space.
   */
  visible: _propTypes2.default.bool
} : {};

TabScrollButton.defaultProps = {
  visible: true
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTabScrollButton' })(TabScrollButton);

/***/ }),

/***/ "./node_modules/material-ui/Tabs/Tabs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _isNan = __webpack_require__("./node_modules/babel-runtime/core-js/number/is-nan.js");

var _isNan2 = _interopRequireDefault(_isNan);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _reactScrollbarSize = __webpack_require__("./node_modules/react-scrollbar-size/index.js");

var _reactScrollbarSize2 = _interopRequireDefault(_reactScrollbarSize);

var _normalizeScrollLeft = __webpack_require__("./node_modules/normalize-scroll-left/lib/main.js");

var _scroll = __webpack_require__("./node_modules/scroll/index.js");

var _scroll2 = _interopRequireDefault(_scroll);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _TabIndicator = __webpack_require__("./node_modules/material-ui/Tabs/TabIndicator.js");

var _TabIndicator2 = _interopRequireDefault(_TabIndicator);

var _TabScrollButton = __webpack_require__("./node_modules/material-ui/Tabs/TabScrollButton.js");

var _TabScrollButton2 = _interopRequireDefault(_TabScrollButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      overflow: 'hidden',
      minHeight: 48,
      WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.
    },
    flexContainer: {
      display: 'flex'
    },
    scrollingContainer: {
      position: 'relative',
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },
    scrollable: {
      overflowX: 'scroll'
    },
    centered: {
      justifyContent: 'center'
    },
    buttonAuto: (0, _defineProperty3.default)({}, theme.breakpoints.down('xs'), {
      display: 'none'
    })
  };
};

var Tabs = function (_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      indicatorStyle: {},
      scrollerStyle: {
        marginBottom: 0
      },
      showLeftScroll: false,
      showRightScroll: false,
      mounted: false
    }, _this.getConditionalElements = function () {
      var _this$props = _this.props,
          classes = _this$props.classes,
          buttonClassName = _this$props.buttonClassName,
          scrollable = _this$props.scrollable,
          scrollButtons = _this$props.scrollButtons,
          TabScrollButtonProp = _this$props.TabScrollButton,
          theme = _this$props.theme;

      var conditionalElements = {};
      conditionalElements.scrollbarSizeListener = scrollable ? _react2.default.createElement(_reactScrollbarSize2.default, {
        onLoad: _this.handleScrollbarSizeChange,
        onChange: _this.handleScrollbarSizeChange
      }) : null;

      var showScrollButtons = scrollable && (scrollButtons === 'auto' || scrollButtons === 'on');

      conditionalElements.scrollButtonLeft = showScrollButtons ? _react2.default.createElement(TabScrollButtonProp, {
        direction: theme && theme.direction === 'rtl' ? 'right' : 'left',
        onClick: _this.handleLeftScrollClick,
        visible: _this.state.showLeftScroll,
        className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.buttonAuto, scrollButtons === 'auto'), buttonClassName)
      }) : null;

      conditionalElements.scrollButtonRight = showScrollButtons ? _react2.default.createElement(TabScrollButtonProp, {
        direction: theme && theme.direction === 'rtl' ? 'left' : 'right',
        onClick: _this.handleRightScrollClick,
        visible: _this.state.showRightScroll,
        className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.buttonAuto, scrollButtons === 'auto'), buttonClassName)
      }) : null;

      return conditionalElements;
    }, _this.getTabsMeta = function (value, direction) {
      var tabsMeta = void 0;
      if (_this.tabs) {
        var rect = _this.tabs.getBoundingClientRect();
        // create a new object with ClientRect class props + scrollLeft
        tabsMeta = {
          clientWidth: _this.tabs ? _this.tabs.clientWidth : 0,
          scrollLeft: _this.tabs ? _this.tabs.scrollLeft : 0,
          scrollLeftNormalized: _this.tabs ? (0, _normalizeScrollLeft.getNormalizedScrollLeft)(_this.tabs, direction) : 0,
          scrollWidth: _this.tabs ? _this.tabs.scrollWidth : 0,
          left: rect.left,
          right: rect.right
        };
      }

      var tabMeta = void 0;
      if (_this.tabs && value !== false) {
        var children = _this.tabs.children[0].children;

        if (children.length > 0) {
          var tab = children[_this.valueToIndex[value]];
           true ? (0, _warning2.default)(tab, 'Material-UI: the value provided `' + value + '` is invalid') : void 0;
          tabMeta = tab ? tab.getBoundingClientRect() : null;
        }
      }
      return { tabsMeta: tabsMeta, tabMeta: tabMeta };
    }, _this.tabs = undefined, _this.valueToIndex = {}, _this.handleResize = (0, _debounce2.default)(function () {
      _this.updateIndicatorState(_this.props);
      _this.updateScrollButtonState();
    }, 166), _this.handleLeftScrollClick = function () {
      if (_this.tabs) {
        _this.moveTabsScroll(-_this.tabs.clientWidth);
      }
    }, _this.handleRightScrollClick = function () {
      if (_this.tabs) {
        _this.moveTabsScroll(_this.tabs.clientWidth);
      }
    }, _this.handleScrollbarSizeChange = function (_ref2) {
      var scrollbarHeight = _ref2.scrollbarHeight;

      _this.setState({
        scrollerStyle: {
          marginBottom: -scrollbarHeight
        }
      });
    }, _this.handleTabsScroll = (0, _debounce2.default)(function () {
      _this.updateScrollButtonState();
    }, 166), _this.moveTabsScroll = function (delta) {
      var theme = _this.props.theme;


      if (_this.tabs) {
        var multiplier = theme.direction === 'rtl' ? -1 : 1;
        var nextScrollLeft = _this.tabs.scrollLeft + delta * multiplier;
        // Fix for Edge
        var invert = theme.direction === 'rtl' && (0, _normalizeScrollLeft.detectScrollType)() === 'reverse' ? -1 : 1;
        _scroll2.default.left(_this.tabs, invert * nextScrollLeft);
      }
    }, _this.scrollSelectedIntoView = function () {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          value = _this$props2.value;

      var _this$getTabsMeta = _this.getTabsMeta(value, theme.direction),
          tabsMeta = _this$getTabsMeta.tabsMeta,
          tabMeta = _this$getTabsMeta.tabMeta;

      if (!tabMeta || !tabsMeta) {
        return;
      }

      if (tabMeta.left < tabsMeta.left) {
        // left side of button is out of view
        var nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
        _scroll2.default.left(_this.tabs, nextScrollLeft);
      } else if (tabMeta.right > tabsMeta.right) {
        // right side of button is out of view
        var _nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
        _scroll2.default.left(_this.tabs, _nextScrollLeft);
      }
    }, _this.updateScrollButtonState = function () {
      var _this$props3 = _this.props,
          scrollable = _this$props3.scrollable,
          scrollButtons = _this$props3.scrollButtons,
          theme = _this$props3.theme;


      if (_this.tabs && scrollable && scrollButtons !== 'off') {
        var _this$tabs = _this.tabs,
            scrollWidth = _this$tabs.scrollWidth,
            clientWidth = _this$tabs.clientWidth;

        var scrollLeft = (0, _normalizeScrollLeft.getNormalizedScrollLeft)(_this.tabs, theme.direction);

        var showLeftScroll = theme.direction === 'rtl' ? scrollWidth > clientWidth + scrollLeft : scrollLeft > 0;

        var showRightScroll = theme.direction === 'rtl' ? scrollLeft > 0 : scrollWidth > clientWidth + scrollLeft;

        if (showLeftScroll !== _this.state.showLeftScroll || showRightScroll !== _this.state.showRightScroll) {
          _this.setState({ showLeftScroll: showLeftScroll, showRightScroll: showRightScroll });
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ mounted: true });
      this.updateIndicatorState(this.props);
      this.updateScrollButtonState();

      if (this.props.action) {
        this.props.action({
          updateIndicator: this.handleResize
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this.updateScrollButtonState();

      // The index might have changed at the same time.
      // We need to check again the right indicator position.
      this.updateIndicatorState(this.props);

      if (this.state.indicatorStyle !== prevState.indicatorStyle) {
        this.scrollSelectedIntoView();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
      this.handleTabsScroll.cancel();
    }
  }, {
    key: 'updateIndicatorState',
    value: function updateIndicatorState(props) {
      var theme = props.theme,
          value = props.value;

      var _getTabsMeta = this.getTabsMeta(value, theme.direction),
          tabsMeta = _getTabsMeta.tabsMeta,
          tabMeta = _getTabsMeta.tabMeta;

      var left = 0;

      if (tabMeta && tabsMeta) {
        var correction = theme.direction === 'rtl' ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        left = tabMeta.left - tabsMeta.left + correction;
      }

      var indicatorStyle = {
        left: left,
        // May be wrong until the font is loaded.
        width: tabMeta ? tabMeta.width : 0
      };

      if ((indicatorStyle.left !== this.state.indicatorStyle.left || indicatorStyle.width !== this.state.indicatorStyle.width) && !(0, _isNan2.default)(indicatorStyle.left) && !(0, _isNan2.default)(indicatorStyle.width)) {
        this.setState({ indicatorStyle: indicatorStyle });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames3,
          _this2 = this;

      var _props = this.props,
          action = _props.action,
          buttonClassName = _props.buttonClassName,
          centered = _props.centered,
          childrenProp = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          fullWidth = _props.fullWidth,
          indicatorClassName = _props.indicatorClassName,
          indicatorColor = _props.indicatorColor,
          onChange = _props.onChange,
          scrollable = _props.scrollable,
          scrollButtons = _props.scrollButtons,
          TabScrollButtonProp = _props.TabScrollButton,
          textColor = _props.textColor,
          theme = _props.theme,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['action', 'buttonClassName', 'centered', 'children', 'classes', 'className', 'fullWidth', 'indicatorClassName', 'indicatorColor', 'onChange', 'scrollable', 'scrollButtons', 'TabScrollButton', 'textColor', 'theme', 'value']);


      var className = (0, _classnames2.default)(classes.root, classNameProp);
      var scrollerClassName = (0, _classnames2.default)(classes.scrollingContainer, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.fixed, !scrollable), (0, _defineProperty3.default)(_classNames3, classes.scrollable, scrollable), _classNames3));
      var tabItemContainerClassName = (0, _classnames2.default)(classes.flexContainer, (0, _defineProperty3.default)({}, classes.centered, centered && !scrollable));

      var indicator = _react2.default.createElement(_TabIndicator2.default, {
        style: this.state.indicatorStyle,
        className: indicatorClassName,
        color: indicatorColor
      });

      this.valueToIndex = {};
      var childIndex = 0;
      var children = _react2.default.Children.map(childrenProp, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return null;
        }

        var childValue = child.props.value || childIndex;
        _this2.valueToIndex[childValue] = childIndex;
        var selected = childValue === value;

        childIndex += 1;
        return _react2.default.cloneElement(child, {
          fullWidth: fullWidth,
          indicator: selected && !_this2.state.mounted && indicator,
          selected: selected,
          onChange: onChange,
          textColor: textColor,
          value: childValue
        });
      });

      var conditionalElements = this.getConditionalElements();

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: className }, other),
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        conditionalElements.scrollbarSizeListener,
        _react2.default.createElement(
          'div',
          { className: classes.flexContainer },
          conditionalElements.scrollButtonLeft,
          _react2.default.createElement(
            'div',
            {
              className: scrollerClassName,
              style: this.state.scrollerStyle,
              ref: function ref(node) {
                _this2.tabs = node;
              },
              role: 'tablist',
              onScroll: this.handleTabsScroll
            },
            _react2.default.createElement(
              'div',
              { className: tabItemContainerClassName },
              children
            ),
            this.state.mounted && indicator
          ),
          conditionalElements.scrollButtonRight
        )
      );
    }
  }]);
  return Tabs;
}(_react2.default.Component);

Tabs.propTypes =  true ? {
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `updateIndicator()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _propTypes2.default.func,
  /**
   * The CSS class name of the scroll button elements.
   */
  buttonClassName: _propTypes2.default.string,
  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: _propTypes2.default.bool,
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the tabs will grow to use all the available space.
   * This property is intended for small views, like on mobile.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The CSS class name of the indicator element.
   */
  indicatorClassName: _propTypes2.default.string,
  /**
   * Determines the color of the indicator.
   */
  indicatorColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.oneOf(['secondary', 'primary'])]),
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {number} value We default to the index of the child
   */
  onChange: _propTypes2.default.func,
  /**
   * True invokes scrolling properties and allow for horizontally scrolling
   * (or swiping) the tab bar.
   */
  scrollable: _propTypes2.default.bool,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  scrollButtons: _propTypes2.default.oneOf(['auto', 'on', 'off']),
  /**
   * The component used to render the scroll buttons.
   */
  TabScrollButton: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Determines the color of the `Tab`.
   */
  textColor: _propTypes2.default.oneOf(['secondary', 'primary', 'inherit']),
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: _propTypes2.default.any
} : {};

Tabs.defaultProps = {
  centered: false,
  fullWidth: false,
  indicatorColor: 'secondary',
  scrollable: false,
  scrollButtons: 'auto',
  TabScrollButton: _TabScrollButton2.default,
  textColor: 'inherit'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTabs', withTheme: true })(Tabs);

/***/ }),

/***/ "./node_modules/material-ui/Tabs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tabs = __webpack_require__("./node_modules/material-ui/Tabs/Tabs.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tabs).default;
  }
});

var _Tab = __webpack_require__("./node_modules/material-ui/Tabs/Tab.js");

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tab).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/TextField/TextField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = __webpack_require__("./node_modules/material-ui/Input/index.js");

var _Input2 = _interopRequireDefault(_Input);

var _FormControl = __webpack_require__("./node_modules/material-ui/Form/FormControl.js");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormHelperText = __webpack_require__("./node_modules/material-ui/Form/FormHelperText.js");

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _Select = __webpack_require__("./node_modules/material-ui/Select/Select.js");

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 * - [FormControl](/api/form-control)
 * - [InputLabel](/api/input-label)
 * - [Input](/api/input)
 * - [FormHelperText](/api/form-helper-text)
 *
 * If you wish to alter the properties applied to the native input, you can do as follow:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 * - using the upper case props for passing values direct to the components.
 * - using the underlying components directly as shown in the demos.
 */
function TextField(props) {
  var autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      children = props.children,
      className = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      error = props.error,
      FormHelperTextProps = props.FormHelperTextProps,
      fullWidth = props.fullWidth,
      helperText = props.helperText,
      helperTextClassName = props.helperTextClassName,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      labelClassName = props.labelClassName,
      multiline = props.multiline,
      name = props.name,
      onChange = props.onChange,
      placeholder = props.placeholder,
      required = props.required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      select = props.select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      other = (0, _objectWithoutProperties3.default)(props, ['autoComplete', 'autoFocus', 'children', 'className', 'defaultValue', 'disabled', 'error', 'FormHelperTextProps', 'fullWidth', 'helperText', 'helperTextClassName', 'id', 'InputLabelProps', 'inputProps', 'InputProps', 'inputRef', 'label', 'labelClassName', 'multiline', 'name', 'onChange', 'placeholder', 'required', 'rows', 'rowsMax', 'select', 'SelectProps', 'type', 'value']);


   true ? (0, _warning2.default)(!select || Boolean(children), 'Material-UI: `children` must be passed when using the `TextField` component with `select`.') : void 0;

  var helperTextId = helperText && id ? id + '-helper-text' : undefined;
  var InputComponent = _react2.default.createElement(_Input2.default, (0, _extends3.default)({
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: disabled,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onChange: onChange,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputProps));

  return _react2.default.createElement(
    _FormControl2.default,
    (0, _extends3.default)({
      'aria-describedby': helperTextId,
      className: className,
      error: error,
      fullWidth: fullWidth,
      required: required
    }, other),
    label && _react2.default.createElement(
      _Input.InputLabel,
      (0, _extends3.default)({ htmlFor: id, className: labelClassName }, InputLabelProps),
      label
    ),
    select ? _react2.default.createElement(
      _Select2.default,
      (0, _extends3.default)({ value: value, input: InputComponent }, SelectProps),
      children
    ) : InputComponent,
    helperText && _react2.default.createElement(
      _FormHelperText2.default,
      (0, _extends3.default)({ className: helperTextClassName, id: helperTextId }, FormHelperTextProps),
      helperText
    )
  );
} // @inheritedComponent FormControl

TextField.propTypes =  true ? {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: _propTypes2.default.string,
  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: _propTypes2.default.bool,
  /**
   * @ignore
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The default value of the `Input` element.
   */
  defaultValue: _propTypes2.default.string,
  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: _propTypes2.default.bool,
  /**
   * Properties applied to the `FormHelperText` element.
   */
  FormHelperTextProps: _propTypes2.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The helper text content.
   */
  helperText: _propTypes2.default.node,
  /**
   * The CSS class name of the helper text element.
   */
  helperTextClassName: _propTypes2.default.string,
  /**
   * The id of the `input` element.
   * Use that property to make `label` and `helperText` accessible for screen readers.
   */
  id: _propTypes2.default.string,
  /**
   * Properties applied to the `InputLabel` element.
   */
  InputLabelProps: _propTypes2.default.object,
  /**
   * Properties applied to the `Input` element.
   */
  InputProps: _propTypes2.default.object,
  /**
   * Properties applied to the native `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * The label content.
   */
  label: _propTypes2.default.node,
  /**
   * The CSS class name of the label element.
   */
  labelClassName: _propTypes2.default.string,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: _propTypes2.default.oneOf(['none', 'dense', 'normal']),
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: _propTypes2.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback
   */
  onChange: _propTypes2.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: _propTypes2.default.string,
  /**
   * If `true`, the label is displayed as required.
   */
  required: _propTypes2.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /**
   * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: _propTypes2.default.bool,
  /**
   * Properties applied to the `Select` element.
   */
  SelectProps: _propTypes2.default.object,
  /**
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))])
} : {};

TextField.defaultProps = {
  required: false,
  select: false
};

exports.default = TextField;

/***/ }),

/***/ "./node_modules/material-ui/TextField/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextField = __webpack_require__("./node_modules/material-ui/TextField/TextField.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextField).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/Tooltip/Tooltip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPopper = __webpack_require__("./node_modules/react-popper/lib/react-popper.js");

var _helpers = __webpack_require__("./node_modules/material-ui/utils/helpers.js");

var _RefHolder = __webpack_require__("./node_modules/material-ui/internal/RefHolder.js");

var _RefHolder2 = _interopRequireDefault(_RefHolder);

var _common = __webpack_require__("./node_modules/material-ui/colors/common.js");

var _common2 = _interopRequireDefault(_common);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-multi-comp, no-underscore-dangle */

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline',
      flexDirection: 'inherit' // Makes the wrapper more transparent.
    },
    popper: {
      zIndex: theme.zIndex.tooltip
    },
    popperClose: {
      pointerEvents: 'none'
    },
    tooltip: (0, _defineProperty3.default)({
      backgroundColor: theme.palette.grey[700],
      borderRadius: 2,
      color: _common2.default.white,
      fontFamily: theme.typography.fontFamily,
      opacity: 0,
      transform: 'scale(0)',
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shortest
      }),
      minHeight: 0,
      padding: theme.spacing.unit,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.round(16 / 14) + 'em'
    }, theme.breakpoints.up('sm'), {
      padding: theme.spacing.unit / 2 + 'px ' + theme.spacing.unit + 'px',
      fontSize: theme.typography.pxToRem(10),
      lineHeight: theme.typography.round(14 / 10) + 'em'
    }),
    tooltipLeft: (0, _defineProperty3.default)({
      transformOrigin: 'right center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipRight: (0, _defineProperty3.default)({
      transformOrigin: 'left center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipTop: (0, _defineProperty3.default)({
      transformOrigin: 'center bottom',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipBottom: (0, _defineProperty3.default)({
      transformOrigin: 'center top',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipOpen: {
      opacity: 0.9,
      transform: 'scale(1)'
    }
  };
};

function flipPlacement(placement) {
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}

var Tooltip = function (_React$Component) {
  (0, _inherits3.default)(Tooltip, _React$Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.enterTimer = null, _this.leaveTimer = null, _this.touchTimer = null, _this.isControlled = null, _this.popper = null, _this.children = null, _this.ignoreNonTouchEvents = false, _this.handleResize = (0, _debounce2.default)(function () {
      if (_this.popper) {
        _this.popper._popper.scheduleUpdate();
      }
    }, 166), _this.handleRequestOpen = function (event) {
      var children = _this.props.children;

      var childrenProps = children.props;

      if (event.type === 'focus' && childrenProps.onFocus) {
        childrenProps.onFocus(event);
      }

      if (event.type === 'mouseover' && childrenProps.onMouseOver) {
        childrenProps.onMouseOver(event);
      }

      if (_this.ignoreNonTouchEvents && event.type !== 'touchstart') {
        return;
      }

      clearTimeout(_this.leaveTimer);
      if (_this.props.enterDelay > 0) {
        _this.leaveTimer = setTimeout(function () {
          _this.requestOpen(event);
        }, _this.props.enterDelay);
      } else {
        _this.requestOpen(event);
      }
    }, _this.requestOpen = function (event) {
      if (!_this.isControlled) {
        _this.setState({ open: true });
      }

      if (_this.props.onOpen) {
        _this.props.onOpen(event, true);
      }
    }, _this.handleClose = function (event) {
      var children = _this.props.children;

      var childrenProps = children.props;

      if (event.type === 'blur' && childrenProps.onBlur) {
        childrenProps.onBlur(event);
      }

      if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
        childrenProps.onMouseLeave(event);
      }

      clearTimeout(_this.leaveTimer);
      if (_this.props.leaveDelay) {
        _this.leaveTimer = setTimeout(function () {
          _this.requestClose(event);
        }, _this.props.leaveDelay);
      } else {
        _this.requestClose(event);
      }
    }, _this.requestClose = function (event) {
      _this.ignoreNonTouchEvents = false;

      if (!_this.isControlled) {
        _this.setState({ open: false });
      }

      if (_this.props.onClose) {
        _this.props.onClose(event, false);
      }
    }, _this.handleTouchStart = function (event) {
      _this.ignoreNonTouchEvents = true;
      var children = _this.props.children;

      var childrenProps = children.props;

      if (childrenProps.onTouchStart) {
        childrenProps.onTouchStart(event);
      }

      clearTimeout(_this.touchTimer);
      event.persist();
      _this.touchTimer = setTimeout(function () {
        _this.handleRequestOpen(event);
      }, 1e3);
    }, _this.handleTouchEnd = function (event) {
      var children = _this.props.children;

      var childrenProps = children.props;

      if (childrenProps.onTouchEnd) {
        childrenProps.onTouchEnd(event);
      }

      clearTimeout(_this.touchTimer);
      clearTimeout(_this.leaveTimer);
      event.persist();
      _this.leaveTimer = setTimeout(function () {
        _this.requestClose(event);
      }, 1500 + _this.props.leaveDelay);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var props = this.props;


      this.isControlled = props.open != null;

      if (!this.isControlled) {
        // not controlled, use internal state
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
       true ? (0, _warning2.default)(!this.children || !this.children.disabled || !this.children.tagName.toLowerCase() === 'button', ['Material-UI: you are providing a disabled button children to the Tooltip component.', 'A disabled element do not fire events.', 'But the Tooltip needs to listen to the children element events to display the title.', '', 'Place a `div` over top of the element.'].join('\n')) : void 0;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      this.handleResize.cancel();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          childrenProp = _props.children,
          classes = _props.classes,
          className = _props.className,
          disableTriggerFocus = _props.disableTriggerFocus,
          disableTriggerHover = _props.disableTriggerHover,
          disableTriggerTouch = _props.disableTriggerTouch,
          enterDelay = _props.enterDelay,
          id = _props.id,
          leaveDelay = _props.leaveDelay,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          openProp = _props.open,
          rawPlacement = _props.placement,
          _props$PopperProps = _props.PopperProps;
      _props$PopperProps = _props$PopperProps === undefined ? {} : _props$PopperProps;
      var PopperClassName = _props$PopperProps.PopperClassName,
          PopperOther = (0, _objectWithoutProperties3.default)(_props$PopperProps, ['PopperClassName']),
          theme = _props.theme,
          title = _props.title,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'disableTriggerFocus', 'disableTriggerHover', 'disableTriggerTouch', 'enterDelay', 'id', 'leaveDelay', 'onClose', 'onOpen', 'open', 'placement', 'PopperProps', 'theme', 'title']);


      var placement = theme.direction === 'rtl' ? flipPlacement(rawPlacement) : rawPlacement;
      var open = this.isControlled ? openProp : this.state.open;
      var childrenProps = {};

      if (title === '') {
        open = false;
      }

      childrenProps['aria-describedby'] = id;

      if (!disableTriggerTouch) {
        childrenProps.onTouchStart = this.handleTouchStart;
        childrenProps.onTouchEnd = this.handleTouchEnd;
      }

      if (!disableTriggerHover) {
        childrenProps.onMouseOver = this.handleRequestOpen;
        childrenProps.onMouseLeave = this.handleClose;
      }

      if (!disableTriggerFocus) {
        childrenProps.onFocus = this.handleRequestOpen;
        childrenProps.onBlur = this.handleClose;
      }

       true ? (0, _warning2.default)(!childrenProp.props.title, ['Material-UI: you have been providing a `title` property to the child of <Tooltip />.', 'Remove this title property `' + childrenProp.props.title + '` or the Tooltip component.'].join('\n')) : void 0;

      return _react2.default.createElement(
        _reactEventListener2.default,
        { target: 'window', onResize: this.handleResize },
        _react2.default.createElement(
          _reactPopper.Manager,
          (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
          _react2.default.createElement(
            _reactPopper.Target,
            null,
            function (_ref2) {
              var targetProps = _ref2.targetProps;
              return _react2.default.createElement(
                _RefHolder2.default,
                {
                  ref: function ref(node) {
                    _this2.children = (0, _reactDom.findDOMNode)(node);
                    targetProps.ref(_this2.children);
                  }
                },
                _react2.default.cloneElement(childrenProp, childrenProps)
              );
            }
          ),
          _react2.default.createElement(
            _reactPopper.Popper,
            (0, _extends3.default)({
              placement: placement,
              eventsEnabled: open,
              className: (0, _classnames2.default)(classes.popper, (0, _defineProperty3.default)({}, classes.popperClose, !open), PopperClassName)
            }, PopperOther, {
              ref: function ref(node) {
                _this2.popper = node;
              }
            }),
            function (_ref3) {
              var popperProps = _ref3.popperProps,
                  restProps = _ref3.restProps;

              var actualPlacement = popperProps['data-placement'] || placement;
              return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, popperProps, restProps, {
                  style: (0, _extends3.default)({}, popperProps.style, {
                    top: popperProps.style.top || 0,
                    left: popperProps.style.left || 0
                  }, restProps.style)
                }),
                _react2.default.createElement(
                  'div',
                  {
                    id: id,
                    role: 'tooltip',
                    'aria-hidden': !open,
                    className: (0, _classnames2.default)(classes.tooltip, (0, _defineProperty3.default)({}, classes.tooltipOpen, open), classes['tooltip' + (0, _helpers.capitalize)(actualPlacement.split('-')[0])])
                  },
                  title
                )
              );
            }
          )
        )
      );
    }
  }]);
  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes =  true ? {
  /**
   * Tooltip reference element.
   */
  children: _propTypes2.default.element.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Do not respond to focus events.
   */
  disableTriggerFocus: _propTypes2.default.bool,
  /**
   * Do not respond to hover events.
   */
  disableTriggerHover: _propTypes2.default.bool,
  /**
   * Do not respond to long press touch events.
   */
  disableTriggerTouch: _propTypes2.default.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   */
  enterDelay: _propTypes2.default.number,
  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * By providing this property, we can use aria-describedby to solve the accessibility issue.
   */
  id: _propTypes2.default.string,
  /**
   * The number of milliseconds to wait before hidding the tooltip.
   */
  leaveDelay: _propTypes2.default.number,
  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes2.default.func,
  /**
   * If `true`, the tooltip is shown.
   */
  open: _propTypes2.default.bool,
  /**
   * Tooltip placement
   */
  placement: _propTypes2.default.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Properties applied to the `Popper` element.
   */
  PopperProps: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: _propTypes2.default.node.isRequired
} : {};

Tooltip.defaultProps = {
  disableTriggerFocus: false,
  disableTriggerHover: false,
  disableTriggerTouch: false,
  enterDelay: 0,
  leaveDelay: 0,
  placement: 'bottom'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTooltip', withTheme: true })(Tooltip);

/***/ }),

/***/ "./node_modules/material-ui/Tooltip/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tooltip = __webpack_require__("./node_modules/material-ui/Tooltip/Tooltip.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tooltip).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/colors/amber.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var amber = {
  50: '#fff8e1',
  100: '#ffecb3',
  200: '#ffe082',
  300: '#ffd54f',
  400: '#ffca28',
  500: '#ffc107',
  600: '#ffb300',
  700: '#ffa000',
  800: '#ff8f00',
  900: '#ff6f00',
  A100: '#ffe57f',
  A200: '#ffd740',
  A400: '#ffc400',
  A700: '#ffab00'
};

exports.default = amber;

/***/ }),

/***/ "./node_modules/material-ui/colors/blue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};

exports.default = blue;

/***/ }),

/***/ "./node_modules/material-ui/colors/blueGrey.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var blueGrey = {
  50: '#eceff1',
  100: '#cfd8dc',
  200: '#b0bec5',
  300: '#90a4ae',
  400: '#78909c',
  500: '#607d8b',
  600: '#546e7a',
  700: '#455a64',
  800: '#37474f',
  900: '#263238',
  A100: '#cfd8dc',
  A200: '#b0bec5',
  A400: '#78909c',
  A700: '#455a64'
};

exports.default = blueGrey;

/***/ }),

/***/ "./node_modules/material-ui/colors/brown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var brown = {
  50: '#efebe9',
  100: '#d7ccc8',
  200: '#bcaaa4',
  300: '#a1887f',
  400: '#8d6e63',
  500: '#795548',
  600: '#6d4c41',
  700: '#5d4037',
  800: '#4e342e',
  900: '#3e2723',
  A100: '#d7ccc8',
  A200: '#bcaaa4',
  A400: '#8d6e63',
  A700: '#5d4037'
};

exports.default = brown;

/***/ }),

/***/ "./node_modules/material-ui/colors/cyan.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cyan = {
  50: '#e0f7fa',
  100: '#b2ebf2',
  200: '#80deea',
  300: '#4dd0e1',
  400: '#26c6da',
  500: '#00bcd4',
  600: '#00acc1',
  700: '#0097a7',
  800: '#00838f',
  900: '#006064',
  A100: '#84ffff',
  A200: '#18ffff',
  A400: '#00e5ff',
  A700: '#00b8d4'
};

exports.default = cyan;

/***/ }),

/***/ "./node_modules/material-ui/colors/deepOrange.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deepOrange = {
  50: '#fbe9e7',
  100: '#ffccbc',
  200: '#ffab91',
  300: '#ff8a65',
  400: '#ff7043',
  500: '#ff5722',
  600: '#f4511e',
  700: '#e64a19',
  800: '#d84315',
  900: '#bf360c',
  A100: '#ff9e80',
  A200: '#ff6e40',
  A400: '#ff3d00',
  A700: '#dd2c00'
};

exports.default = deepOrange;

/***/ }),

/***/ "./node_modules/material-ui/colors/deepPurple.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deepPurple = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  A100: '#b388ff',
  A200: '#7c4dff',
  A400: '#651fff',
  A700: '#6200ea'
};

exports.default = deepPurple;

/***/ }),

/***/ "./node_modules/material-ui/colors/green.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};

exports.default = green;

/***/ }),

/***/ "./node_modules/material-ui/colors/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/material-ui/colors/common.js");

Object.defineProperty(exports, 'common', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_common).default;
  }
});

var _red = __webpack_require__("./node_modules/material-ui/colors/red.js");

Object.defineProperty(exports, 'red', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_red).default;
  }
});

var _pink = __webpack_require__("./node_modules/material-ui/colors/pink.js");

Object.defineProperty(exports, 'pink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pink).default;
  }
});

var _purple = __webpack_require__("./node_modules/material-ui/colors/purple.js");

Object.defineProperty(exports, 'purple', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_purple).default;
  }
});

var _deepPurple = __webpack_require__("./node_modules/material-ui/colors/deepPurple.js");

Object.defineProperty(exports, 'deepPurple', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_deepPurple).default;
  }
});

var _indigo = __webpack_require__("./node_modules/material-ui/colors/indigo.js");

Object.defineProperty(exports, 'indigo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_indigo).default;
  }
});

var _blue = __webpack_require__("./node_modules/material-ui/colors/blue.js");

Object.defineProperty(exports, 'blue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_blue).default;
  }
});

var _lightBlue = __webpack_require__("./node_modules/material-ui/colors/lightBlue.js");

Object.defineProperty(exports, 'lightBlue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lightBlue).default;
  }
});

var _cyan = __webpack_require__("./node_modules/material-ui/colors/cyan.js");

Object.defineProperty(exports, 'cyan', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cyan).default;
  }
});

var _teal = __webpack_require__("./node_modules/material-ui/colors/teal.js");

Object.defineProperty(exports, 'teal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_teal).default;
  }
});

var _green = __webpack_require__("./node_modules/material-ui/colors/green.js");

Object.defineProperty(exports, 'green', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_green).default;
  }
});

var _lightGreen = __webpack_require__("./node_modules/material-ui/colors/lightGreen.js");

Object.defineProperty(exports, 'lightGreen', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lightGreen).default;
  }
});

var _lime = __webpack_require__("./node_modules/material-ui/colors/lime.js");

Object.defineProperty(exports, 'lime', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lime).default;
  }
});

var _yellow = __webpack_require__("./node_modules/material-ui/colors/yellow.js");

Object.defineProperty(exports, 'yellow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_yellow).default;
  }
});

var _amber = __webpack_require__("./node_modules/material-ui/colors/amber.js");

Object.defineProperty(exports, 'amber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_amber).default;
  }
});

var _orange = __webpack_require__("./node_modules/material-ui/colors/orange.js");

Object.defineProperty(exports, 'orange', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_orange).default;
  }
});

var _deepOrange = __webpack_require__("./node_modules/material-ui/colors/deepOrange.js");

Object.defineProperty(exports, 'deepOrange', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_deepOrange).default;
  }
});

var _brown = __webpack_require__("./node_modules/material-ui/colors/brown.js");

Object.defineProperty(exports, 'brown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brown).default;
  }
});

var _grey = __webpack_require__("./node_modules/material-ui/colors/grey.js");

Object.defineProperty(exports, 'grey', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_grey).default;
  }
});

var _blueGrey = __webpack_require__("./node_modules/material-ui/colors/blueGrey.js");

Object.defineProperty(exports, 'blueGrey', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_blueGrey).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/colors/lightBlue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};

exports.default = lightBlue;

/***/ }),

/***/ "./node_modules/material-ui/colors/lightGreen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var lightGreen = {
  50: '#f1f8e9',
  100: '#dcedc8',
  200: '#c5e1a5',
  300: '#aed581',
  400: '#9ccc65',
  500: '#8bc34a',
  600: '#7cb342',
  700: '#689f38',
  800: '#558b2f',
  900: '#33691e',
  A100: '#ccff90',
  A200: '#b2ff59',
  A400: '#76ff03',
  A700: '#64dd17'
};

exports.default = lightGreen;

/***/ }),

/***/ "./node_modules/material-ui/colors/lime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var lime = {
  50: '#f9fbe7',
  100: '#f0f4c3',
  200: '#e6ee9c',
  300: '#dce775',
  400: '#d4e157',
  500: '#cddc39',
  600: '#c0ca33',
  700: '#afb42b',
  800: '#9e9d24',
  900: '#827717',
  A100: '#f4ff81',
  A200: '#eeff41',
  A400: '#c6ff00',
  A700: '#aeea00'
};

exports.default = lime;

/***/ }),

/***/ "./node_modules/material-ui/colors/orange.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};

exports.default = orange;

/***/ }),

/***/ "./node_modules/material-ui/colors/purple.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};

exports.default = purple;

/***/ }),

/***/ "./node_modules/material-ui/colors/teal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var teal = {
  50: '#e0f2f1',
  100: '#b2dfdb',
  200: '#80cbc4',
  300: '#4db6ac',
  400: '#26a69a',
  500: '#009688',
  600: '#00897b',
  700: '#00796b',
  800: '#00695c',
  900: '#004d40',
  A100: '#a7ffeb',
  A200: '#64ffda',
  A400: '#1de9b6',
  A700: '#00bfa5'
};

exports.default = teal;

/***/ }),

/***/ "./node_modules/material-ui/colors/yellow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var yellow = {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
  A100: '#ffff8d',
  A200: '#ffff00',
  A400: '#ffea00',
  A700: '#ffd600'
};

exports.default = yellow;

/***/ }),

/***/ "./node_modules/material-ui/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppBar__ = __webpack_require__("./node_modules/material-ui/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AppBar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return __WEBPACK_IMPORTED_MODULE_0__AppBar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Avatar__ = __webpack_require__("./node_modules/material-ui/Avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Avatar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return __WEBPACK_IMPORTED_MODULE_1__Avatar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Badge__ = __webpack_require__("./node_modules/material-ui/Badge/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Badge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Badge__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return __WEBPACK_IMPORTED_MODULE_2__Badge___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BottomNavigation__ = __webpack_require__("./node_modules/material-ui/BottomNavigation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BottomNavigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__BottomNavigation__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "BottomNavigation", function() { return __WEBPACK_IMPORTED_MODULE_3__BottomNavigation___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__BottomNavigation__, "BottomNavigationAction")) __webpack_require__.d(__webpack_exports__, "BottomNavigationAction", function() { return __WEBPACK_IMPORTED_MODULE_3__BottomNavigation__["BottomNavigationAction"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button__ = __webpack_require__("./node_modules/material-ui/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Button__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_4__Button___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ButtonBase__ = __webpack_require__("./node_modules/material-ui/ButtonBase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ButtonBase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ButtonBase__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ButtonBase", function() { return __WEBPACK_IMPORTED_MODULE_5__ButtonBase___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Card__ = __webpack_require__("./node_modules/material-ui/Card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Card__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return __WEBPACK_IMPORTED_MODULE_6__Card___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__Card__, "CardActions")) __webpack_require__.d(__webpack_exports__, "CardActions", function() { return __WEBPACK_IMPORTED_MODULE_6__Card__["CardActions"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__Card__, "CardContent")) __webpack_require__.d(__webpack_exports__, "CardContent", function() { return __WEBPACK_IMPORTED_MODULE_6__Card__["CardContent"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__Card__, "CardHeader")) __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return __WEBPACK_IMPORTED_MODULE_6__Card__["CardHeader"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__Card__, "CardMedia")) __webpack_require__.d(__webpack_exports__, "CardMedia", function() { return __WEBPACK_IMPORTED_MODULE_6__Card__["CardMedia"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Checkbox__ = __webpack_require__("./node_modules/material-ui/Checkbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Checkbox__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_7__Checkbox___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Chip__ = __webpack_require__("./node_modules/material-ui/Chip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Chip__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return __WEBPACK_IMPORTED_MODULE_8__Chip___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_ClickAwayListener__ = __webpack_require__("./node_modules/material-ui/utils/ClickAwayListener.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_ClickAwayListener___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__utils_ClickAwayListener__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ClickAwayListener", function() { return __WEBPACK_IMPORTED_MODULE_9__utils_ClickAwayListener___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Dialog__ = __webpack_require__("./node_modules/material-ui/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Dialog__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__Dialog__, "DialogActions")) __webpack_require__.d(__webpack_exports__, "DialogActions", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog__["DialogActions"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__Dialog__, "DialogContent")) __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog__["DialogContent"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__Dialog__, "DialogContentText")) __webpack_require__.d(__webpack_exports__, "DialogContentText", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog__["DialogContentText"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__Dialog__, "DialogTitle")) __webpack_require__.d(__webpack_exports__, "DialogTitle", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog__["DialogTitle"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__Dialog__, "withMobileDialog")) __webpack_require__.d(__webpack_exports__, "withMobileDialog", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog__["withMobileDialog"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Divider__ = __webpack_require__("./node_modules/material-ui/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Divider__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return __WEBPACK_IMPORTED_MODULE_11__Divider___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Drawer__ = __webpack_require__("./node_modules/material-ui/Drawer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Drawer__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return __WEBPACK_IMPORTED_MODULE_12__Drawer___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__ = __webpack_require__("./node_modules/material-ui/ExpansionPanel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanel", function() { return __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__, "ExpansionPanelActions")) __webpack_require__.d(__webpack_exports__, "ExpansionPanelActions", function() { return __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__["ExpansionPanelActions"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__, "ExpansionPanelDetails")) __webpack_require__.d(__webpack_exports__, "ExpansionPanelDetails", function() { return __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__["ExpansionPanelDetails"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__, "ExpansionPanelSummary")) __webpack_require__.d(__webpack_exports__, "ExpansionPanelSummary", function() { return __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__["ExpansionPanelSummary"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Form__ = __webpack_require__("./node_modules/material-ui/Form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__Form__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__Form__, "FormControl")) __webpack_require__.d(__webpack_exports__, "FormControl", function() { return __WEBPACK_IMPORTED_MODULE_14__Form__["FormControl"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__Form__, "FormGroup")) __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return __WEBPACK_IMPORTED_MODULE_14__Form__["FormGroup"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__Form__, "FormLabel")) __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return __WEBPACK_IMPORTED_MODULE_14__Form__["FormLabel"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__Form__, "FormHelperText")) __webpack_require__.d(__webpack_exports__, "FormHelperText", function() { return __WEBPACK_IMPORTED_MODULE_14__Form__["FormHelperText"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__Form__, "FormControlLabel")) __webpack_require__.d(__webpack_exports__, "FormControlLabel", function() { return __WEBPACK_IMPORTED_MODULE_14__Form__["FormControlLabel"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Hidden__ = __webpack_require__("./node_modules/material-ui/Hidden/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Hidden___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__Hidden__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Hidden", function() { return __WEBPACK_IMPORTED_MODULE_15__Hidden___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Icon__ = __webpack_require__("./node_modules/material-ui/Icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__Icon__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_16__Icon___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__IconButton__ = __webpack_require__("./node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__IconButton__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return __WEBPACK_IMPORTED_MODULE_17__IconButton___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Input__ = __webpack_require__("./node_modules/material-ui/Input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__Input__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_18__Input___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_18__Input__, "InputLabel")) __webpack_require__.d(__webpack_exports__, "InputLabel", function() { return __WEBPACK_IMPORTED_MODULE_18__Input__["InputLabel"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_18__Input__, "InputAdornment")) __webpack_require__.d(__webpack_exports__, "InputAdornment", function() { return __WEBPACK_IMPORTED_MODULE_18__Input__["InputAdornment"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Grid__ = __webpack_require__("./node_modules/material-ui/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__Grid__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_19__Grid___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__GridList__ = __webpack_require__("./node_modules/material-ui/GridList/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__GridList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__GridList__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "GridList", function() { return __WEBPACK_IMPORTED_MODULE_20__GridList___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_20__GridList__, "GridListTile")) __webpack_require__.d(__webpack_exports__, "GridListTile", function() { return __WEBPACK_IMPORTED_MODULE_20__GridList__["GridListTile"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_20__GridList__, "GridListTileBar")) __webpack_require__.d(__webpack_exports__, "GridListTileBar", function() { return __WEBPACK_IMPORTED_MODULE_20__GridList__["GridListTileBar"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__List__ = __webpack_require__("./node_modules/material-ui/List/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__List__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "List", function() { return __WEBPACK_IMPORTED_MODULE_21__List___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_21__List__, "ListItem")) __webpack_require__.d(__webpack_exports__, "ListItem", function() { return __WEBPACK_IMPORTED_MODULE_21__List__["ListItem"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_21__List__, "ListItemAvatar")) __webpack_require__.d(__webpack_exports__, "ListItemAvatar", function() { return __WEBPACK_IMPORTED_MODULE_21__List__["ListItemAvatar"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_21__List__, "ListItemIcon")) __webpack_require__.d(__webpack_exports__, "ListItemIcon", function() { return __WEBPACK_IMPORTED_MODULE_21__List__["ListItemIcon"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_21__List__, "ListItemSecondaryAction")) __webpack_require__.d(__webpack_exports__, "ListItemSecondaryAction", function() { return __WEBPACK_IMPORTED_MODULE_21__List__["ListItemSecondaryAction"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_21__List__, "ListItemText")) __webpack_require__.d(__webpack_exports__, "ListItemText", function() { return __WEBPACK_IMPORTED_MODULE_21__List__["ListItemText"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_21__List__, "ListSubheader")) __webpack_require__.d(__webpack_exports__, "ListSubheader", function() { return __WEBPACK_IMPORTED_MODULE_21__List__["ListSubheader"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Menu__ = __webpack_require__("./node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__Menu__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return __WEBPACK_IMPORTED_MODULE_22__Menu___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_22__Menu__, "MenuItem")) __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return __WEBPACK_IMPORTED_MODULE_22__Menu__["MenuItem"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_22__Menu__, "MenuList")) __webpack_require__.d(__webpack_exports__, "MenuList", function() { return __WEBPACK_IMPORTED_MODULE_22__Menu__["MenuList"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__MobileStepper__ = __webpack_require__("./node_modules/material-ui/MobileStepper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__MobileStepper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__MobileStepper__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "MobileStepper", function() { return __WEBPACK_IMPORTED_MODULE_23__MobileStepper___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Modal__ = __webpack_require__("./node_modules/material-ui/Modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__Modal__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_24__Modal___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_24__Modal__, "Backdrop")) __webpack_require__.d(__webpack_exports__, "Backdrop", function() { return __WEBPACK_IMPORTED_MODULE_24__Modal__["Backdrop"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_24__Modal__, "ModalManager")) __webpack_require__.d(__webpack_exports__, "ModalManager", function() { return __WEBPACK_IMPORTED_MODULE_24__Modal__["ModalManager"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Paper__ = __webpack_require__("./node_modules/material-ui/Paper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__Paper__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return __WEBPACK_IMPORTED_MODULE_25__Paper___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Popover__ = __webpack_require__("./node_modules/material-ui/Popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__Popover__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return __WEBPACK_IMPORTED_MODULE_26__Popover___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Portal__ = __webpack_require__("./node_modules/material-ui/Portal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Portal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__Portal__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return __WEBPACK_IMPORTED_MODULE_27__Portal___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Progress__ = __webpack_require__("./node_modules/material-ui/Progress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__Progress__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_28__Progress__, "CircularProgress")) __webpack_require__.d(__webpack_exports__, "CircularProgress", function() { return __WEBPACK_IMPORTED_MODULE_28__Progress__["CircularProgress"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_28__Progress__, "LinearProgress")) __webpack_require__.d(__webpack_exports__, "LinearProgress", function() { return __WEBPACK_IMPORTED_MODULE_28__Progress__["LinearProgress"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Radio__ = __webpack_require__("./node_modules/material-ui/Radio/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__Radio__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_29__Radio___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_29__Radio__, "RadioGroup")) __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return __WEBPACK_IMPORTED_MODULE_29__Radio__["RadioGroup"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Reboot__ = __webpack_require__("./node_modules/material-ui/Reboot/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__Reboot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__Reboot__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Reboot", function() { return __WEBPACK_IMPORTED_MODULE_30__Reboot___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Select__ = __webpack_require__("./node_modules/material-ui/Select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__Select__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_31__Select___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Snackbar__ = __webpack_require__("./node_modules/material-ui/Snackbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__Snackbar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return __WEBPACK_IMPORTED_MODULE_32__Snackbar___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_32__Snackbar__, "SnackbarContent")) __webpack_require__.d(__webpack_exports__, "SnackbarContent", function() { return __WEBPACK_IMPORTED_MODULE_32__Snackbar__["SnackbarContent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Stepper__ = __webpack_require__("./node_modules/material-ui/Stepper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Stepper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__Stepper__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Stepper", function() { return __WEBPACK_IMPORTED_MODULE_33__Stepper___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_33__Stepper__, "Step")) __webpack_require__.d(__webpack_exports__, "Step", function() { return __WEBPACK_IMPORTED_MODULE_33__Stepper__["Step"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_33__Stepper__, "StepButton")) __webpack_require__.d(__webpack_exports__, "StepButton", function() { return __WEBPACK_IMPORTED_MODULE_33__Stepper__["StepButton"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_33__Stepper__, "StepIcon")) __webpack_require__.d(__webpack_exports__, "StepIcon", function() { return __WEBPACK_IMPORTED_MODULE_33__Stepper__["StepIcon"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_33__Stepper__, "StepContent")) __webpack_require__.d(__webpack_exports__, "StepContent", function() { return __WEBPACK_IMPORTED_MODULE_33__Stepper__["StepContent"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_33__Stepper__, "StepLabel")) __webpack_require__.d(__webpack_exports__, "StepLabel", function() { return __WEBPACK_IMPORTED_MODULE_33__Stepper__["StepLabel"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__styles__ = __webpack_require__("./node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__styles__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__styles__, "MuiThemeProvider")) __webpack_require__.d(__webpack_exports__, "MuiThemeProvider", function() { return __WEBPACK_IMPORTED_MODULE_34__styles__["MuiThemeProvider"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__styles__, "withStyles")) __webpack_require__.d(__webpack_exports__, "withStyles", function() { return __WEBPACK_IMPORTED_MODULE_34__styles__["withStyles"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__styles__, "withTheme")) __webpack_require__.d(__webpack_exports__, "withTheme", function() { return __WEBPACK_IMPORTED_MODULE_34__styles__["withTheme"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__styles__, "createMuiTheme")) __webpack_require__.d(__webpack_exports__, "createMuiTheme", function() { return __WEBPACK_IMPORTED_MODULE_34__styles__["createMuiTheme"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__styles__, "jssPreset")) __webpack_require__.d(__webpack_exports__, "jssPreset", function() { return __WEBPACK_IMPORTED_MODULE_34__styles__["jssPreset"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__colors__ = __webpack_require__("./node_modules/material-ui/colors/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35__colors__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return __WEBPACK_IMPORTED_MODULE_35__colors__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__SvgIcon__ = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__SvgIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36__SvgIcon__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "SvgIcon", function() { return __WEBPACK_IMPORTED_MODULE_36__SvgIcon___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Switch__ = __webpack_require__("./node_modules/material-ui/Switch/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37__Switch__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_37__Switch___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Table__ = __webpack_require__("./node_modules/material-ui/Table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38__Table__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return __WEBPACK_IMPORTED_MODULE_38__Table___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_38__Table__, "TableBody")) __webpack_require__.d(__webpack_exports__, "TableBody", function() { return __WEBPACK_IMPORTED_MODULE_38__Table__["TableBody"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_38__Table__, "TableCell")) __webpack_require__.d(__webpack_exports__, "TableCell", function() { return __WEBPACK_IMPORTED_MODULE_38__Table__["TableCell"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_38__Table__, "TableFooter")) __webpack_require__.d(__webpack_exports__, "TableFooter", function() { return __WEBPACK_IMPORTED_MODULE_38__Table__["TableFooter"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_38__Table__, "TableHead")) __webpack_require__.d(__webpack_exports__, "TableHead", function() { return __WEBPACK_IMPORTED_MODULE_38__Table__["TableHead"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_38__Table__, "TablePagination")) __webpack_require__.d(__webpack_exports__, "TablePagination", function() { return __WEBPACK_IMPORTED_MODULE_38__Table__["TablePagination"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_38__Table__, "TableRow")) __webpack_require__.d(__webpack_exports__, "TableRow", function() { return __WEBPACK_IMPORTED_MODULE_38__Table__["TableRow"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_38__Table__, "TableSortLabel")) __webpack_require__.d(__webpack_exports__, "TableSortLabel", function() { return __WEBPACK_IMPORTED_MODULE_38__Table__["TableSortLabel"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Tabs__ = __webpack_require__("./node_modules/material-ui/Tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39__Tabs__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return __WEBPACK_IMPORTED_MODULE_39__Tabs___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_39__Tabs__, "Tab")) __webpack_require__.d(__webpack_exports__, "Tab", function() { return __WEBPACK_IMPORTED_MODULE_39__Tabs__["Tab"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__Typography__ = __webpack_require__("./node_modules/material-ui/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40__Typography__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return __WEBPACK_IMPORTED_MODULE_40__Typography___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__TextField__ = __webpack_require__("./node_modules/material-ui/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41__TextField__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return __WEBPACK_IMPORTED_MODULE_41__TextField___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__Toolbar__ = __webpack_require__("./node_modules/material-ui/Toolbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42__Toolbar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return __WEBPACK_IMPORTED_MODULE_42__Toolbar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__Tooltip__ = __webpack_require__("./node_modules/material-ui/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43__Tooltip__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_43__Tooltip___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__transitions__ = __webpack_require__("./node_modules/material-ui/transitions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__transitions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44__transitions__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_44__transitions__, "Slide")) __webpack_require__.d(__webpack_exports__, "Slide", function() { return __WEBPACK_IMPORTED_MODULE_44__transitions__["Slide"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_44__transitions__, "Grow")) __webpack_require__.d(__webpack_exports__, "Grow", function() { return __WEBPACK_IMPORTED_MODULE_44__transitions__["Grow"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_44__transitions__, "Fade")) __webpack_require__.d(__webpack_exports__, "Fade", function() { return __WEBPACK_IMPORTED_MODULE_44__transitions__["Fade"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_44__transitions__, "Collapse")) __webpack_require__.d(__webpack_exports__, "Collapse", function() { return __WEBPACK_IMPORTED_MODULE_44__transitions__["Collapse"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_44__transitions__, "Zoom")) __webpack_require__.d(__webpack_exports__, "Zoom", function() { return __WEBPACK_IMPORTED_MODULE_44__transitions__["Zoom"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__utils_withWidth__ = __webpack_require__("./node_modules/material-ui/utils/withWidth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__utils_withWidth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45__utils_withWidth__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "withWidth", function() { return __WEBPACK_IMPORTED_MODULE_45__utils_withWidth___default.a; });
/** @license Material-UI v1.0.0-beta.35
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */




































// eslint-disable-next-line import/first

















/***/ }),

/***/ "./node_modules/material-ui/internal/SwitchBase.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _CheckBoxOutlineBlank = __webpack_require__("./node_modules/material-ui/internal/svg-icons/CheckBoxOutlineBlank.js");

var _CheckBoxOutlineBlank2 = _interopRequireDefault(_CheckBoxOutlineBlank);

var _CheckBox = __webpack_require__("./node_modules/material-ui/internal/svg-icons/CheckBox.js");

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _IconButton = __webpack_require__("./node_modules/material-ui/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none'
  },
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  },
  default: {},
  checked: {},
  disabled: {}
};

/**
 * @ignore - internal component.
 */

var SwitchBase = function (_React$Component) {
  (0, _inherits3.default)(SwitchBase, _React$Component);

  function SwitchBase() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SwitchBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SwitchBase.__proto__ || (0, _getPrototypeOf2.default)(SwitchBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.input = null, _this.isControlled = null, _this.handleInputChange = function (event) {
      var checked = event.target.checked;

      if (!_this.isControlled) {
        _this.setState({ checked: checked });
      }

      if (_this.props.onChange) {
        _this.props.onChange(event, checked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SwitchBase, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var props = this.props;


      this.isControlled = props.checked != null;

      if (!this.isControlled) {
        // not controlled, use internal state
        this.setState({
          checked: props.defaultChecked !== undefined ? props.defaultChecked : false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          checkedProp = _props.checked,
          checkedIcon = _props.checkedIcon,
          classes = _props.classes,
          classNameProp = _props.className,
          disabledProp = _props.disabled,
          iconProp = _props.icon,
          id = _props.id,
          inputProps = _props.inputProps,
          inputRef = _props.inputRef,
          name = _props.name,
          onChange = _props.onChange,
          tabIndex = _props.tabIndex,
          type = _props.type,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'checkedIcon', 'classes', 'className', 'disabled', 'icon', 'id', 'inputProps', 'inputRef', 'name', 'onChange', 'tabIndex', 'type', 'value']);
      var muiFormControl = this.context.muiFormControl;

      var disabled = disabledProp;

      if (muiFormControl) {
        if (typeof disabled === 'undefined') {
          disabled = muiFormControl.disabled;
        }
      }

      var checked = this.isControlled ? checkedProp : this.state.checked;
      var className = (0, _classnames2.default)(classes.root, classes.default, classNameProp, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.checked, checked), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames));

      var icon = checked ? checkedIcon : iconProp;

      var hasLabelFor = type === 'checkbox' || type === 'radio';

      return _react2.default.createElement(
        _IconButton2.default,
        (0, _extends3.default)({
          component: 'span',
          className: className,
          disabled: disabled,
          tabIndex: null,
          role: undefined
        }, other),
        icon,
        _react2.default.createElement('input', (0, _extends3.default)({
          id: hasLabelFor && id,
          type: type,
          name: name,
          checked: checked,
          onChange: this.handleInputChange,
          className: classes.input,
          disabled: disabled,
          tabIndex: tabIndex,
          value: value,
          ref: inputRef
        }, inputProps))
      );
    }
  }]);
  return SwitchBase;
}(_react2.default.Component);

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.


SwitchBase.propTypes =  true ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: _propTypes2.default.node,
  /**
   * The id of the `input` element.
   */
  id: _propTypes2.default.string,
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate: _propTypes2.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: _propTypes2.default.node,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /*
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * The input component property `type`.
   */
  type: _propTypes2.default.string,
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

SwitchBase.defaultProps = {
  checkedIcon: _react2.default.createElement(_CheckBox2.default, null),
  disableRipple: false,
  icon: _react2.default.createElement(_CheckBoxOutlineBlank2.default, null),
  type: 'checkbox'
};

SwitchBase.contextTypes = {
  muiFormControl: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSwitchBase' })(SwitchBase);

/***/ }),

/***/ "./node_modules/material-ui/internal/svg-icons/Cancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/material-ui/node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' });

var Cancel = function Cancel(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
Cancel = (0, _pure2.default)(Cancel);
Cancel.muiName = 'SvgIcon';

exports.default = Cancel;

/***/ }),

/***/ "./node_modules/material-ui/internal/svg-icons/CheckBox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/material-ui/node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' });

var CheckBox = function CheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
CheckBox = (0, _pure2.default)(CheckBox);
CheckBox.muiName = 'SvgIcon';

exports.default = CheckBox;

/***/ }),

/***/ "./node_modules/material-ui/internal/svg-icons/CheckBoxOutlineBlank.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/material-ui/node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' });

var CheckBoxOutlineBlank = function CheckBoxOutlineBlank(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
CheckBoxOutlineBlank = (0, _pure2.default)(CheckBoxOutlineBlank);
CheckBoxOutlineBlank.muiName = 'SvgIcon';

exports.default = CheckBoxOutlineBlank;

/***/ }),

/***/ "./node_modules/material-ui/internal/svg-icons/CheckCircle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/material-ui/node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z' });

var CheckCircle = function CheckCircle(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
CheckCircle = (0, _pure2.default)(CheckCircle);
CheckCircle.muiName = 'SvgIcon';

exports.default = CheckCircle;

/***/ }),

/***/ "./node_modules/material-ui/internal/svg-icons/IndeterminateCheckBox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/material-ui/node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z' });

var IndeterminateCheckBox = function IndeterminateCheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
IndeterminateCheckBox = (0, _pure2.default)(IndeterminateCheckBox);
IndeterminateCheckBox.muiName = 'SvgIcon';

exports.default = IndeterminateCheckBox;

/***/ }),

/***/ "./node_modules/material-ui/internal/svg-icons/RadioButtonChecked.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/material-ui/node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' });

var RadioButtonChecked = function RadioButtonChecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
RadioButtonChecked = (0, _pure2.default)(RadioButtonChecked);
RadioButtonChecked.muiName = 'SvgIcon';

exports.default = RadioButtonChecked;

/***/ }),

/***/ "./node_modules/material-ui/internal/svg-icons/RadioButtonUnchecked.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("./node_modules/material-ui/node_modules/recompose/pure.js");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("./node_modules/material-ui/SvgIcon/index.js");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' });

var RadioButtonUnchecked = function RadioButtonUnchecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
RadioButtonUnchecked = (0, _pure2.default)(RadioButtonUnchecked);
RadioButtonUnchecked.muiName = 'SvgIcon';

exports.default = RadioButtonUnchecked;

/***/ }),

/***/ "./node_modules/material-ui/transitions/Collapse.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = __webpack_require__("./node_modules/react-transition-group/Transition.js");

var _Transition2 = _interopRequireDefault(_Transition);

var _withStyles = __webpack_require__("./node_modules/material-ui/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _utils = __webpack_require__("./node_modules/material-ui/transitions/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    entered: {
      height: 'auto'
    },
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },
    wrapperInner: {
      width: '100%'
    }
  };
};

/**
 * The Collapes transition is used by the
 * [Vetical Stepper](/demos/steppers#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
// @inheritedComponent Transition

var Collapse = function (_React$Component) {
  (0, _inherits3.default)(Collapse, _React$Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.wrapper = null, _this.autoTransitionDuration = undefined, _this.timer = null, _this.handleEnter = function (node) {
      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleEntering = function (node) {
      var _this$props = _this.props,
          timeout = _this$props.timeout,
          theme = _this$props.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      var _getTransitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = duration2 + 'ms';
        _this.autoTransitionDuration = duration2;
      } else {
        node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : transitionDuration + 'ms';
      }

      node.style.height = wrapperHeight + 'px';

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.handleEntered = function (node) {
      node.style.height = 'auto';

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    }, _this.handleExit = function (node) {
      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
      node.style.height = wrapperHeight + 'px';

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.handleExiting = function (node) {
      var _this$props2 = _this.props,
          timeout = _this$props2.timeout,
          theme = _this$props2.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      var _getTransitionProps2 = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = duration2 + 'ms';
        _this.autoTransitionDuration = duration2;
      } else {
        node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : transitionDuration + 'ms';
      }

      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    }, _this.addEndListener = function (_, next) {
      if (_this.props.timeout === 'auto') {
        _this.timer = setTimeout(next, _this.autoTransitionDuration || 0);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          collapsedHeight = _props.collapsedHeight,
          Component = _props.component,
          onEnter = _props.onEnter,
          onEntered = _props.onEntered,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          style = _props.style,
          theme = _props.theme,
          timeout = _props.timeout,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'collapsedHeight', 'component', 'onEnter', 'onEntered', 'onEntering', 'onExit', 'onExiting', 'style', 'theme', 'timeout']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          onEntering: this.handleEntering,
          onEnter: this.handleEnter,
          onEntered: this.handleEntered,
          onExiting: this.handleExiting,
          onExit: this.handleExit,
          addEndListener: this.addEndListener,
          timeout: timeout === 'auto' ? null : timeout
        }, other),
        function (state, childProps) {
          return _react2.default.createElement(
            Component,
            (0, _extends3.default)({
              className: (0, _classnames2.default)(classes.container, (0, _defineProperty3.default)({}, classes.entered, state === 'entered'), className),
              style: (0, _extends3.default)({}, style, {
                minHeight: collapsedHeight
              })
            }, childProps),
            _react2.default.createElement(
              'div',
              {
                className: classes.wrapper,
                ref: function ref(node) {
                  _this2.wrapper = node;
                }
              },
              _react2.default.createElement(
                'div',
                { className: classes.wrapperInner },
                children
              )
            )
          );
        }
      );
    }
  }]);
  return Collapse;
}(_react2.default.Component);

Collapse.propTypes =  true ? {
  /**
   * The content node to be collapsed.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The height of the container when collapsed.
   */
  collapsedHeight: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes2.default.bool,
  /**
   * @ignore
   */
  onEnter: _propTypes2.default.func,
  /**
   * @ignore
   */
  onEntered: _propTypes2.default.func,
  /**
   * @ignore
   */
  onEntering: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExit: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExiting: _propTypes2.default.func,
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number }), _propTypes2.default.oneOf(['auto'])])
} : {};

Collapse.defaultProps = {
  collapsedHeight: '0px',
  component: 'div',
  timeout: _transitions.duration.standard
};

exports.default = (0, _withStyles2.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);

/***/ }),

/***/ "./node_modules/material-ui/transitions/Slide.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.setTranslateValue = setTranslateValue;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _Transition = __webpack_require__("./node_modules/react-transition-group/Transition.js");

var _Transition2 = _interopRequireDefault(_Transition);

var _ownerWindow = __webpack_require__("./node_modules/dom-helpers/ownerWindow.js");

var _ownerWindow2 = _interopRequireDefault(_ownerWindow);

var _withTheme = __webpack_require__("./node_modules/material-ui/styles/withTheme.js");

var _withTheme2 = _interopRequireDefault(_withTheme);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _utils = __webpack_require__("./node_modules/material-ui/transitions/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent Transition

var GUTTER = 24;

// Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `translate3d(0, 0, 0)`.`
function getTranslateValue(props, node) {
  var direction = props.direction;

  var rect = node.getBoundingClientRect();

  var transform = void 0;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    var computedStyle = (0, _ownerWindow2.default)(node).getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  var offsetX = 0;
  var offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    var transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return 'translateX(100vw) translateX(-' + (rect.left - offsetX) + 'px)';
  } else if (direction === 'right') {
    return 'translateX(-' + (rect.left + rect.width + GUTTER - offsetX) + 'px)';
  } else if (direction === 'up') {
    return 'translateY(100vh) translateY(-' + (rect.top - offsetY) + 'px)';
  }

  // direction === 'down'
  return 'translate3d(0, ' + (0 - (rect.top + rect.height)) + 'px, 0)';
}

function setTranslateValue(props, node) {
  var transform = getTranslateValue(props, node);

  if (transform) {
    node.style.transform = transform;
    node.style.webkitTransform = transform;
  }
}

/**
 * The Slide transition is used by the [Snackbar](/demos/snackbars) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Slide = function (_React$Component) {
  (0, _inherits3.default)(Slide, _React$Component);

  function Slide() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Slide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Slide.__proto__ || (0, _getPrototypeOf2.default)(Slide)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mounted: false
    }, _this.transition = null, _this.handleResize = (0, _debounce2.default)(function () {
      // Skip configuration where the position is screen size invariant.
      if (_this.props.in || _this.props.direction === 'down' || _this.props.direction === 'right') {
        return;
      }

      var node = (0, _reactDom.findDOMNode)(_this.transition);
      if (node) {
        setTranslateValue(_this.props, node);
      }
    }, 166), _this.handleEnter = function (node) {
      setTranslateValue(_this.props, node);
      (0, _utils.reflow)(node);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleEntering = function (node) {
      var theme = _this.props.theme;

      var _getTransitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration,
          delay = _getTransitionProps.delay;

      node.style.transition = theme.transitions.create('transform', {
        duration: transitionDuration,
        easing: theme.transitions.easing.easeOut,
        delay: delay
      });
      node.style.webkitTransition = theme.transitions.create('-webkit-transform', {
        duration: transitionDuration,
        easing: theme.transitions.easing.easeOut,
        delay: delay
      });
      node.style.transform = 'translate3d(0, 0, 0)';
      node.style.webkitTransform = 'translate3d(0, 0, 0)';
      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.handleExit = function (node) {
      var theme = _this.props.theme;

      var _getTransitionProps2 = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration,
          delay = _getTransitionProps2.delay;

      node.style.transition = theme.transitions.create('transform', {
        duration: transitionDuration,
        easing: theme.transitions.easing.sharp,
        delay: delay
      });
      node.style.webkitTransition = theme.transitions.create('-webkit-transform', {
        duration: transitionDuration,
        easing: theme.transitions.easing.sharp,
        delay: delay
      });
      setTranslateValue(_this.props, node);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.handleExited = function (node) {
      // No need for transitions when the component is hidden
      node.style.transition = '';
      node.style.webkitTransition = '';

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Slide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // state.mounted handle SSR, once the component is mounted, we need
      // to properly hide it.
      if (!this.props.in) {
        // We need to set initial translate values of transition element
        // otherwise component will be shown when in=false.
        this.updatePosition();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({
        mounted: true
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.direction !== this.props.direction && !this.props.in) {
        // We need to update the position of the drawer when the direction change and
        // when it's hidden.
        this.updatePosition();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
    }
  }, {
    key: 'updatePosition',
    value: function updatePosition() {
      var node = (0, _reactDom.findDOMNode)(this.transition);
      if (node) {
        node.style.visibility = 'inherit';
        setTranslateValue(this.props, node);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExited = _props.onExited,
          styleProp = _props.style,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'onEnter', 'onEntering', 'onExit', 'onExited', 'style', 'theme']);


      var style = {};

      // We use this state to handle the server-side rendering.
      // We don't know the width of the children ahead of time.
      // We need to render it.
      if (!this.props.in && !this.state.mounted) {
        style.visibility = 'hidden';
      }

      style = (0, _extends3.default)({}, style, styleProp, _react2.default.isValidElement(children) ? children.props.style : {});

      return _react2.default.createElement(
        _reactEventListener2.default,
        { target: 'window', onResize: this.handleResize },
        _react2.default.createElement(
          _Transition2.default,
          (0, _extends3.default)({
            onEnter: this.handleEnter,
            onEntering: this.handleEntering,
            onExit: this.handleExit,
            onExited: this.handleExited,
            appear: true,
            style: style,
            ref: function ref(node) {
              _this2.transition = node;
            }
          }, other),
          children
        )
      );
    }
  }]);
  return Slide;
}(_react2.default.Component);

Slide.propTypes =  true ? {
  /**
   * A single child content element.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  /**
   * Direction the child node will enter from.
   */
  direction: _propTypes2.default.oneOf(['left', 'right', 'up', 'down']),
  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: _propTypes2.default.bool,
  /**
   * @ignore
   */
  onEnter: _propTypes2.default.func,
  /**
   * @ignore
   */
  onEntered: _propTypes2.default.func,
  /**
   * @ignore
   */
  onEntering: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExit: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExited: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExiting: _propTypes2.default.func,
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })])
} : {};

Slide.defaultProps = {
  direction: 'down',
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

exports.default = (0, _withTheme2.default)()(Slide);

/***/ }),

/***/ "./node_modules/material-ui/transitions/Zoom.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = __webpack_require__("./node_modules/react-transition-group/Transition.js");

var _Transition2 = _interopRequireDefault(_Transition);

var _transitions = __webpack_require__("./node_modules/material-ui/styles/transitions.js");

var _withTheme = __webpack_require__("./node_modules/material-ui/styles/withTheme.js");

var _withTheme2 = _interopRequireDefault(_withTheme);

var _utils = __webpack_require__("./node_modules/material-ui/transitions/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent Transition

var styles = {
  entering: {
    transform: 'scale(1)'
  },
  entered: {
    transform: 'scale(1)'
  }
};

/**
 * The Zoom transition can be used for the floating variant of the
 * [Button](https://material-ui-next.com/demos/buttons/#floating-action-buttons) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Zoom = function (_React$Component) {
  (0, _inherits3.default)(Zoom, _React$Component);

  function Zoom() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Zoom);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Zoom.__proto__ || (0, _getPrototypeOf2.default)(Zoom)).call.apply(_ref, [this].concat(args))), _this), _this.handleEnter = function (node) {
      var theme = _this.props.theme;

      (0, _utils.reflow)(node); // So the animation always start from the start.

      var _getTransitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration,
          delay = _getTransitionProps.delay;

      node.style.transition = theme.transitions.create('transform', {
        duration: transitionDuration,
        delay: delay
      });
      node.style.webkitTransition = theme.transitions.create('transform', {
        duration: transitionDuration,
        delay: delay
      });

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleExit = function (node) {
      var theme = _this.props.theme;

      var _getTransitionProps2 = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration,
          delay = _getTransitionProps2.delay;

      node.style.transition = theme.transitions.create('transform', {
        duration: transitionDuration,
        delay: delay
      });
      node.style.webkitTransition = theme.transitions.create('transform', {
        duration: transitionDuration,
        delay: delay
      });

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Zoom, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onExit = _props.onExit,
          styleProp = _props.style,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'onEnter', 'onExit', 'style', 'theme']);


      var style = (0, _extends3.default)({}, styleProp, _react2.default.isValidElement(children) ? children.props.style : {});

      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({ appear: true, onEnter: this.handleEnter, onExit: this.handleExit }, other),
        function (state, childProps) {
          return _react2.default.cloneElement(children, (0, _extends3.default)({
            style: (0, _extends3.default)({
              transform: 'scale(0)'
            }, styles[state], style)
          }, childProps));
        }
      );
    }
  }]);
  return Zoom;
}(_react2.default.Component);

Zoom.propTypes =  true ? {
  /**
   * A single child content element.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes2.default.bool,
  /**
   * @ignore
   */
  onEnter: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExit: _propTypes2.default.func,
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })])
} : {};

Zoom.defaultProps = {
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

exports.default = (0, _withTheme2.default)()(Zoom);

/***/ }),

/***/ "./node_modules/material-ui/transitions/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Slide = __webpack_require__("./node_modules/material-ui/transitions/Slide.js");

Object.defineProperty(exports, 'Slide', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slide).default;
  }
});

var _Grow = __webpack_require__("./node_modules/material-ui/transitions/Grow.js");

Object.defineProperty(exports, 'Grow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grow).default;
  }
});

var _Fade = __webpack_require__("./node_modules/material-ui/transitions/Fade.js");

Object.defineProperty(exports, 'Fade', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Fade).default;
  }
});

var _Collapse = __webpack_require__("./node_modules/material-ui/transitions/Collapse.js");

Object.defineProperty(exports, 'Collapse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Collapse).default;
  }
});

var _Zoom = __webpack_require__("./node_modules/material-ui/transitions/Zoom.js");

Object.defineProperty(exports, 'Zoom', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Zoom).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/material-ui/utils/ClickAwayListener.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _ownerDocument = __webpack_require__("./node_modules/dom-helpers/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDescendant = function isDescendant(el, target) {
  if (target !== null && target.parentNode) {
    return el === target || isDescendant(el, target.parentNode);
  }
  return false;
};

/**
 * Listen for click events that are triggered outside of the component children.
 */

var ClickAwayListener = function (_React$Component) {
  (0, _inherits3.default)(ClickAwayListener, _React$Component);

  function ClickAwayListener() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClickAwayListener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.mounted = false, _this.handleClickAway = function (event) {
      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      }

      // IE11 support, which trigger the handleClickAway even after the unbind
      if (_this.mounted) {
        var el = (0, _reactDom.findDOMNode)(_this);
        var doc = (0, _ownerDocument2.default)(el);

        if (doc.documentElement && doc.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
          _this.props.onClickAway(event);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClickAwayListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactEventListener2.default,
        {
          target: 'document',
          onMouseup: this.handleClickAway,
          onTouchend: this.handleClickAway
        },
        this.props.children
      );
    }
  }]);
  return ClickAwayListener;
}(_react2.default.Component);

ClickAwayListener.propTypes =  true ? {
  children: _propTypes2.default.node.isRequired,
  onClickAway: _propTypes2.default.func.isRequired
} : {};

exports.default = ClickAwayListener;

/***/ }),

/***/ "./node_modules/material-ui/utils/requirePropFactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var requirePropFactory = function requirePropFactory(componentNameInError) {
  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error('The property `' + propFullNameSafe + '` of ' + ('`' + componentNameInError + '` must be used on `' + requiredProp + '`.'));
      }

      return null;
    };
  };
  return requireProp;
};

exports.default = requirePropFactory;

/***/ }),

/***/ "./node_modules/material-ui/utils/withWidth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWidthDown = exports.isWidthUp = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _wrapDisplayName = __webpack_require__("./node_modules/material-ui/node_modules/recompose/wrapDisplayName.js");

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _hoistNonReactStatics = __webpack_require__("./node_modules/next/node_modules/hoist-non-react-statics/index.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _withTheme = __webpack_require__("./node_modules/material-ui/styles/withTheme.js");

var _withTheme2 = _interopRequireDefault(_withTheme);

var _createBreakpoints = __webpack_require__("./node_modules/material-ui/styles/createBreakpoints.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// By default, returns true if screen width is the same or greater than the given breakpoint.
var isWidthUp = exports.isWidthUp = function isWidthUp(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return _createBreakpoints.keys.indexOf(breakpoint) <= _createBreakpoints.keys.indexOf(width);
  }
  return _createBreakpoints.keys.indexOf(breakpoint) < _createBreakpoints.keys.indexOf(width);
};

// By default, returns true if screen width is the same or less than the given breakpoint.
var isWidthDown = exports.isWidthDown = function isWidthDown(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return _createBreakpoints.keys.indexOf(width) <= _createBreakpoints.keys.indexOf(breakpoint);
  }
  return _createBreakpoints.keys.indexOf(width) < _createBreakpoints.keys.indexOf(breakpoint);
};

var withWidth = function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$resizeInterv = options.resizeInterval,
        resizeInterval = _options$resizeInterv === undefined ? 166 : _options$resizeInterv,
        _options$withTheme = options.withTheme,
        withThemeOption = _options$withTheme === undefined ? false : _options$withTheme;

    var WithWidth = function (_React$Component) {
      (0, _inherits3.default)(WithWidth, _React$Component);

      function WithWidth() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WithWidth);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithWidth.__proto__ || (0, _getPrototypeOf2.default)(WithWidth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          width: undefined
        }, _this.handleResize = (0, _debounce2.default)(function () {
          _this.updateWidth(window.innerWidth);
        }, resizeInterval), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(WithWidth, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.updateWidth(window.innerWidth);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.handleResize.cancel();
        }
      }, {
        key: 'updateWidth',
        value: function updateWidth(innerWidth) {
          var breakpoints = this.props.theme.breakpoints;
          var width = null;

          /**
           * Start with the slowest value as low end devices often have a small screen.
           *
           * innerWidth |xs      sm      md      lg      xl
           *            |-------|-------|-------|-------|------>
           * width      |  xs   |  sm   |  md   |  lg   |  xl
           */
          var index = 1;
          while (width === null && index < _createBreakpoints.keys.length) {
            var currentWidth = _createBreakpoints.keys[index];

            // @media are inclusive, so reproduce the behavior here.
            if (innerWidth < breakpoints.values[currentWidth]) {
              width = _createBreakpoints.keys[index - 1];
              break;
            }

            index += 1;
          }

          width = width || 'xl';

          if (width !== this.state.width) {
            this.setState({
              width: width
            });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              initialWidth = _props.initialWidth,
              theme = _props.theme,
              width = _props.width,
              other = (0, _objectWithoutProperties3.default)(_props, ['initialWidth', 'theme', 'width']);

          var props = (0, _extends3.default)({
            width: width || this.state.width || initialWidth
          }, other);
          var more = {};

          if (withThemeOption) {
            more.theme = theme;
          }

          // When rendering the component on the server,
          // we have no idea about the client browser screen width.
          // In order to prevent blinks and help the reconciliation of the React tree
          // we are not rendering the child component.
          //
          // An alternative is to use the `initialWidth` property.
          if (props.width === undefined) {
            return null;
          }

          return _react2.default.createElement(
            _reactEventListener2.default,
            { target: 'window', onResize: this.handleResize },
            _react2.default.createElement(Component, (0, _extends3.default)({}, more, props))
          );
        }
      }]);
      return WithWidth;
    }(_react2.default.Component);

    WithWidth.propTypes =  true ? {
      /**
       * As `window.innerWidth` is unavailable on the server,
       * we default to rendering an empty componenent during the first mount.
       * In some situation you might want to use an heristic to approximate
       * the screen width of the client browser screen width.
       *
       * For instance, you could be using the user-agent or the client-hints.
       * http://caniuse.com/#search=client%20hint
       */
      initialWidth: _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
      /**
       * @ignore
       */
      theme: _propTypes2.default.object.isRequired,
      /**
       * Bypass the width calculation logic.
       */
      width: _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    } : {};

    if (true) {
      WithWidth.displayName = (0, _wrapDisplayName2.default)(Component, 'WithWidth');
    }

    (0, _hoistNonReactStatics2.default)(WithWidth, Component);

    return (0, _withTheme2.default)()(WithWidth);
  };
};

exports.default = withWidth;

/***/ }),

/***/ "./node_modules/normalize-scroll-left/lib/main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Based on https://github.com/react-bootstrap/dom-helpers/blob/master/src/util/inDOM.js
var inDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var cachedType;
function _setScrollType(type) {
    cachedType = type;
}
exports._setScrollType = _setScrollType;
// Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
function detectScrollType() {
    if (cachedType) {
        return cachedType;
    }
    if (!inDOM || !window.document.body) {
        return 'indeterminate';
    }
    var dummy = window.document.createElement('div');
    dummy.appendChild(document.createTextNode('ABCD'));
    dummy.dir = 'rtl';
    dummy.style.fontSize = '14px';
    dummy.style.width = '4px';
    dummy.style.height = '1px';
    dummy.style.position = 'absolute';
    dummy.style.top = '-1000px';
    dummy.style.overflow = 'scroll';
    document.body.appendChild(dummy);
    cachedType = 'reverse';
    if (dummy.scrollLeft > 0) {
        cachedType = 'default';
    }
    else {
        dummy.scrollLeft = 1;
        if (dummy.scrollLeft === 0) {
            cachedType = 'negative';
        }
    }
    document.body.removeChild(dummy);
    return cachedType;
}
exports.detectScrollType = detectScrollType;
// Based on https://stackoverflow.com/a/24394376
function getNormalizedScrollLeft(element, direction) {
    var scrollLeft = element.scrollLeft;
    // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
    if (direction !== 'rtl') {
        return scrollLeft;
    }
    var type = detectScrollType();
    if (type === 'indeterminate') {
        return Number.NaN;
    }
    switch (type) {
        case 'negative':
            return element.scrollWidth - element.clientWidth + scrollLeft;
        case 'reverse':
            return element.scrollWidth - element.clientWidth - scrollLeft;
    }
    return scrollLeft;
}
exports.getNormalizedScrollLeft = getNormalizedScrollLeft;
function setNormalizedScrollLeft(element, scrollLeft, direction) {
    // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
    if (direction !== 'rtl') {
        element.scrollLeft = scrollLeft;
        return;
    }
    var type = detectScrollType();
    if (type === 'indeterminate') {
        return;
    }
    switch (type) {
        case 'negative':
            element.scrollLeft = element.clientWidth - element.scrollWidth + scrollLeft;
            break;
        case 'reverse':
            element.scrollLeft = element.scrollWidth - element.clientWidth - scrollLeft;
            break;
        default:
            element.scrollLeft = scrollLeft;
            break;
    }
}
exports.setNormalizedScrollLeft = setNormalizedScrollLeft;


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/rafl/index.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/global/window.js")

/**
 * `requestAnimationFrame()`
 */

var request = global.requestAnimationFrame
  || global.webkitRequestAnimationFrame
  || global.mozRequestAnimationFrame
  || fallback

var prev = +new Date
function fallback (fn) {
  var curr = +new Date
  var ms = Math.max(0, 16 - (curr - prev))
  var req = setTimeout(fn, ms)
  return prev = curr, req
}

/**
 * `cancelAnimationFrame()`
 */

var cancel = global.cancelAnimationFrame
  || global.webkitCancelAnimationFrame
  || global.mozCancelAnimationFrame
  || clearTimeout

if (Function.prototype.bind) {
  request = request.bind(global)
  cancel = cancel.bind(global)
}

exports = module.exports = request
exports.cancel = cancel


/***/ }),

/***/ "./node_modules/react-popper/lib/Arrow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popper = context.popper;

  var arrowRef = function arrowRef(node) {
    popper.setArrowNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };
  var arrowStyle = popper.getArrowStyle();

  if (typeof children === 'function') {
    var arrowProps = {
      ref: arrowRef,
      style: arrowStyle
    };
    return children({ arrowProps: arrowProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps, {
    style: _extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return (0, _react.createElement)(component, componentProps, children);
};

Arrow.contextTypes = {
  popper: _propTypes2.default.object.isRequired
};

Arrow.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};

exports.default = Arrow;

/***/ }),

/***/ "./node_modules/react-popper/lib/Manager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Manager = function (_Component) {
  _inherits(Manager, _Component);

  function Manager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Manager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
      _this._targetNode = node;
    }, _this._getTargetNode = function () {
      return _this._targetNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['tag', 'children']);

      if (tag !== false) {
        return (0, _react.createElement)(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(_react.Component);

Manager.childContextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};
Manager.propTypes = {
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};
Manager.defaultProps = {
  tag: 'div'
};
exports.default = Manager;

/***/ }),

/***/ "./node_modules/react-popper/lib/Popper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popper = __webpack_require__("./node_modules/popper.js/dist/esm/popper.js");

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popper = function (_Component) {
  _inherits(Popper, _Component);

  function Popper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    }, _this._getTargetNode = function () {
      return _this.context.popperManager.getTargetNode();
    }, _this._getOffsets = function (data) {
      return Object.keys(data.offsets).map(function (key) {
        return data.offsets[key];
      });
    }, _this._isDataDirty = function (data) {
      if (_this.state.data) {
        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
      } else {
        return true;
      }
    }, _this._updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this._isDataDirty(data)) {
          _this.setState({ data: data });
        }
        return data;
      }
    }, _this._getPopperStyle = function () {
      var data = _this.state.data;


      if (!_this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      return _extends({
        position: data.offsets.popper.position
      }, data.styles);
    }, _this._getPopperPlacement = function () {
      return _this.state.data ? _this.state.data.placement : undefined;
    }, _this._getPopperHide = function () {
      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
    }, _this._getArrowStyle = function () {
      if (!_this.state.data || !_this.state.data.offsets.arrow) {
        return {};
      } else {
        var _this$state$data$offs = _this.state.data.offsets.arrow,
            top = _this$state$data$offs.top,
            left = _this$state$data$offs.left;

        return { top: top, left: left };
      }
    }, _this._handlePopperRef = function (node) {
      _this._popperNode = node;
      if (node) {
        _this._createPopper();
      } else {
        _this._destroyPopper();
      }
      if (_this.props.innerRef) {
        _this.props.innerRef(node);
      }
    }, _this._scheduleUpdate = function () {
      _this._popper && _this._popper.scheduleUpdate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode,
          getArrowStyle: this._getArrowStyle
        }
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled) {
        this._destroyPopper();
        this._createPopper();
      }
      if (lastProps.children !== this.props.children) {
        this._scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: '_createPopper',
    value: function _createPopper() {
      var _this2 = this;

      var _props = this.props,
          placement = _props.placement,
          eventsEnabled = _props.eventsEnabled;

      var modifiers = _extends({}, this.props.modifiers, {
        applyStyle: { enabled: false },
        updateState: this._updateStateModifier
      });
      if (this._arrowNode) {
        modifiers.arrow = {
          element: this._arrowNode
        };
      }
      this._popper = new _popper2.default(this._getTargetNode(), this._popperNode, {
        placement: placement,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      });

      // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
      setTimeout(function () {
        return _this2._scheduleUpdate();
      });
    }
  }, {
    key: '_destroyPopper',
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          component = _props2.component,
          innerRef = _props2.innerRef,
          placement = _props2.placement,
          eventsEnabled = _props2.eventsEnabled,
          modifiers = _props2.modifiers,
          children = _props2.children,
          restProps = _objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'modifiers', 'children']);

      var popperStyle = this._getPopperStyle();
      var popperPlacement = this._getPopperPlacement();
      var popperHide = this._getPopperHide();

      if (typeof children === 'function') {
        var popperProps = {
          ref: this._handlePopperRef,
          style: popperStyle,
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        };
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._scheduleUpdate
        });
      }

      var componentProps = _extends({}, restProps, {
        style: _extends({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = this._handlePopperRef;
      } else {
        componentProps.innerRef = this._handlePopperRef;
      }

      return (0, _react.createElement)(component, componentProps, children);
    }
  }]);

  return Popper;
}(_react.Component);

Popper.contextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};
Popper.childContextTypes = {
  popper: _propTypes2.default.object.isRequired
};
Popper.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  placement: _propTypes2.default.oneOf(_popper2.default.placements),
  eventsEnabled: _propTypes2.default.bool,
  modifiers: _propTypes2.default.object,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};
Popper.defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  modifiers: {}
};
exports.default = Popper;

/***/ }),

/***/ "./node_modules/react-popper/lib/Target.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = { ref: targetRef };
    return children({ targetProps: targetProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return (0, _react.createElement)(component, componentProps, children);
};

Target.contextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};

Target.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};

exports.default = Target;

/***/ }),

/***/ "./node_modules/react-popper/lib/react-popper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = exports.Popper = exports.Target = exports.Manager = undefined;

var _Manager2 = __webpack_require__("./node_modules/react-popper/lib/Manager.js");

var _Manager3 = _interopRequireDefault(_Manager2);

var _Target2 = __webpack_require__("./node_modules/react-popper/lib/Target.js");

var _Target3 = _interopRequireDefault(_Target2);

var _Popper2 = __webpack_require__("./node_modules/react-popper/lib/Popper.js");

var _Popper3 = _interopRequireDefault(_Popper2);

var _Arrow2 = __webpack_require__("./node_modules/react-popper/lib/Arrow.js");

var _Arrow3 = _interopRequireDefault(_Arrow2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Manager = _Manager3.default;
exports.Target = _Target3.default;
exports.Popper = _Popper3.default;
exports.Arrow = _Arrow3.default;

/***/ }),

/***/ "./node_modules/react-scrollbar-size/ScrollbarSize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__("./node_modules/react-event-listener/lib/index.js");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _stifle = __webpack_require__("./node_modules/stifle/index.js");

var _stifle2 = _interopRequireDefault(_stifle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
	width: '100px',
	height: '100px',
	position: 'absolute',
	top: '-100000px',
	overflow: 'scroll',
	msOverflowStyle: 'scrollbar'
};

var ScrollbarSize = function (_Component) {
	(0, _inherits3.default)(ScrollbarSize, _Component);

	function ScrollbarSize() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ScrollbarSize);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ScrollbarSize.__proto__ || (0, _getPrototypeOf2.default)(ScrollbarSize)).call.apply(_ref, [this].concat(args))), _this), _this.setMeasurements = function () {
			_this.scrollbarHeight = _this.node.offsetHeight - _this.node.clientHeight;
			_this.scrollbarWidth = _this.node.offsetWidth - _this.node.clientWidth;
		}, _this.handleResize = (0, _stifle2.default)(function () {
			var onChange = _this.props.onChange;


			var prevHeight = _this.scrollbarHeight;
			var prevWidth = _this.scrollbarWidth;
			_this.setMeasurements();
			if (prevHeight !== _this.scrollbarHeight || prevWidth !== _this.scrollbarWidth) {
				onChange({ scrollbarHeight: _this.scrollbarHeight, scrollbarWidth: _this.scrollbarWidth });
			}
		}, 166), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ScrollbarSize, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var onLoad = this.props.onLoad;


			if (onLoad) {
				this.setMeasurements();
				onLoad({ scrollbarHeight: this.scrollbarHeight, scrollbarWidth: this.scrollbarWidth });
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.handleResize.cancel();
		}
	}, {
		key: 'render',
		// Corresponds to 10 frames at 60 Hz.

		value: function render() {
			var _this2 = this;

			var onChange = this.props.onChange;


			return _react2.default.createElement(
				'div',
				null,
				onChange ? _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }) : null,
				_react2.default.createElement('div', {
					style: styles,
					ref: function ref(node) {
						_this2.node = node;
					}
				})
			);
		}
	}]);
	return ScrollbarSize;
}(_react.Component);

ScrollbarSize.defaultProps = {
	onLoad: null,
	onChange: null
};
exports.default = ScrollbarSize;

/***/ }),

/***/ "./node_modules/react-scrollbar-size/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollbarSize = __webpack_require__("./node_modules/react-scrollbar-size/ScrollbarSize.js");

var _ScrollbarSize2 = _interopRequireDefault(_ScrollbarSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ScrollbarSize2.default;

/***/ }),

/***/ "./node_modules/scroll/index.js":
/***/ (function(module, exports, __webpack_require__) {

var raf = __webpack_require__("./node_modules/rafl/index.js")
var E_NOSCROLL = new Error('Element already at target scroll position')
var E_CANCELLED = new Error('Scroll cancelled')
var min = Math.min

module.exports = {
  left: make('scrollLeft'),
  top: make('scrollTop')
}

function make (prop) {
  return function scroll (el, to, opts, cb) {
    opts = opts || {}

    if (typeof opts == 'function') cb = opts, opts = {}
    if (typeof cb != 'function') cb = noop

    var start = +new Date
    var from = el[prop]
    var ease = opts.ease || inOutSine
    var duration = !isNaN(opts.duration) ? +opts.duration : 350
    var cancelled = false

    return from === to ?
      cb(E_NOSCROLL, el[prop]) :
      raf(animate), cancel

    function cancel () {
      cancelled = true
    }

    function animate (timestamp) {
      if (cancelled) return cb(E_CANCELLED, el[prop])

      var now = +new Date
      var time = min(1, ((now - start) / duration))
      var eased = ease(time)

      el[prop] = (eased * (to - from)) + from

      time < 1 ? raf(animate) : raf(function () {
        cb(null, el[prop])
      })
    }
  }
}

function inOutSine (n) {
  return 0.5 * (1 - Math.cos(Math.PI * n))
}

function noop () {}


/***/ }),

/***/ "./node_modules/stifle/index.js":
/***/ (function(module, exports) {

module.exports = stifle;


function stifle (fn, wait) {
  if (typeof fn !== 'function' || typeof wait !== 'number') {
    throw new Error('stifle(fn, wait) -- expected a function and number of milliseconds, got (' + typeof fn + ', ' + typeof wait + ')');
  }

  var timer;    // Timer to fire after `wait` has elapsed
  var called;   // Keep track if it gets called during the `wait`

  var wrapper = function () {

    // Check if still "cooling down" from a previous call
    if (timer) {
      called = true;
    } else {
      // Start a timer to fire after the `wait` is over
      timer = setTimeout(afterWait, wait);
      // And call the wrapped function
      fn();
    }
  }

  // Add a cancel method, to kill and pending calls
  wrapper.cancel = function () {
    // Clear the called flag, or it would fire twice when called again later
    called = false;

    // Turn off the timer, so it won't fire after the wait expires
    if (timer) {
      clearTimeout(timer);
      timer = undefined;
    }
  }

  function afterWait() {
    // Empty out the timer
    timer = undefined;

    // If it was called during the `wait`, fire it again
    if (called) {
      called = false;
      wrapper();
    }
  }

  return wrapper;
}


/***/ }),

/***/ "./pages/SimpleTable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsxFileName = '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js';

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__("./node_modules/material-ui/styles/index.js");

var _Table = __webpack_require__("./node_modules/material-ui/Table/index.js");

var _Table2 = _interopRequireDefault(_Table);

var _materialUi = __webpack_require__("./node_modules/material-ui/index.es.js");

var _Paper = __webpack_require__("./node_modules/material-ui/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _index = __webpack_require__("./index.js");

var _index2 = _interopRequireDefault(_index);

var _recompose = __webpack_require__("./node_modules/recompose/dist/Recompose.esm.js");

var _contracts = __webpack_require__("./lib/contracts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  };
};

var id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id: id, name: name, calories: calories, fat: fat, carbs: carbs, protein: protein };
}

var data = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)];
var SimpleTableUI = (0, _styles.withStyles)(styles)(function (_ref) {
  var contractStates = _ref.contractStates,
      classes = _ref.classes;
  return _react2.default.createElement(
    _Paper2.default,
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    },
    contractStates && contractStates.map(function (n) {
      console.log('contractStates', contractStates);
      console.log('n.state', n.state.length);
      return _react2.default.createElement(
        _Paper2.default,
        { className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        },
        _react2.default.createElement(
          _Table2.default,
          { className: classes.table, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          },
          _react2.default.createElement(
            _Table.TableHead,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            _react2.default.createElement(
              _materialUi.Typography,
              { variant: 'title', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              'Nutrition'
            ),
            _react2.default.createElement(
              _Table.TableRow,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              _react2.default.createElement(
                _Table.TableCell,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  }
                },
                'Name'
              ),
              _react2.default.createElement(
                _Table.TableCell,
                { numeric: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                'Type'
              ),
              _react2.default.createElement(
                _Table.TableCell,
                { numeric: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                },
                'Value'
              )
            )
          ),
          _react2.default.createElement(
            _Table.TableBody,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            n.state.map(function (e) {
              console.log('e.value ', e.value);
              return _react2.default.createElement(
                _Table.TableRow,
                { key: n.contractName, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                },
                _react2.default.createElement(
                  _Table.TableCell,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  e.name
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  { numeric: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  e.type
                ),
                _react2.default.createElement(
                  _Table.TableCell,
                  { numeric: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  },
                  e.value.toString()
                )
              );
            })
          )
        )
      );
    })
  );
});

SimpleTableUI.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var SimpleTable = (0, _recompose.compose)((0, _recompose.lifecycle)({
  componentWillReceiveProps: function componentWillReceiveProps() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var contractState, test;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _contracts.Wallet.getContractState();

            case 2:
              contractState = _context.sent;
              _context.next = 5;
              return _contracts.Wallet.contractFunc('States._string')();

            case 5:
              test = _context.sent;
              _context.next = 8;
              return _this.setState({
                contractStates: contractState
              });

            case 8:
              console.log('received props for table', _this.props);
              console.log('test', test);

              _context.next = 12;
              return _this.forceUpdate();

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
}

// web3.eth.getBlock(this.props.log.blockNumber, (err, block) => {
//   this.setState({
//     block,
//   });
// });
), (0, _recompose.mapProps)(function (_ref2) {
  var contractStates = _ref2.contractStates;

  console.log('mapping props', contractStates[0]);
  return {
    // date: block ? moment(new Date(block.timestamp * 1000)).format('LL') : null,
    // numCrcs: Web3.fromWei(log.args.value).toString(),
    contractStates: contractStates
  };
}))(SimpleTableUI);

var _default = SimpleTable;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, 'styles', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(id, 'id', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(createData, 'createData', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(data, 'data', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(SimpleTableUI, 'SimpleTableUI', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(SimpleTable, 'SimpleTable', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  reactHotLoader.register(_default, 'default', '/home/ubuntu/dev/contract-state-util/pages/SimpleTable.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/SimpleTable")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.c53baef698d32b9b02d9.hot-update.js.map