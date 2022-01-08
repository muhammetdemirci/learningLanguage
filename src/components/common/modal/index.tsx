import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Modal as ModalBase,
  ModalProps as ModalBaseProps,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { TouchableOpacity } from "../touchableOpacity";
import { LAYOUT } from "../../../constants/layout";
import { Block } from "../block";
import { Text } from "../text";

export interface ModalProps extends ModalBaseProps {
  title?: string;
  open?: boolean | undefined;
  custom?: any;
  onPressClose?: Function;
  children?: any;

  height?: number | undefined;
}

export const Modal = ({
  title,
  open = false,
  custom = false,
  onPressClose = () => null,
  height = 200,
  children,
  ...rest
}: ModalProps) => {
  // theme
  const { colors } = useTheme() as AppTheme;

  const initialTop = LAYOUT.window.height;

  // state
  const [top] = useState(new Animated.Value(initialTop));

  useEffect(() => {
    if (open)
      Animated.timing(top, {
        toValue: LAYOUT.window.height - height,
        duration: 400,
        useNativeDriver: false,
      }).start(() => {});
  }, [open]);

  const handleClose = () => {
    Animated.timing(top, {
      toValue: initialTop,
      duration: 400,
      useNativeDriver: false,
    }).start(() => {
      if (onPressClose) onPressClose();
    });
  };

  return (
    <ModalBase
      animationType="fade"
      transparent={true}
      visible={open}
      supportedOrientations={[
        "portrait",
        "landscape",
        "landscape-left",
        "landscape-right",
      ]}
      onRequestClose={handleClose}
    >
      <TouchableWithoutFeedback onPress={handleClose}>
        {custom ? (
          children
        ) : (
          <Block
            flex
            height={"100%"}
            width={"100%"}
            color={colors.overlay}
            {...rest}
          >
            <TouchableWithoutFeedback>
              <Animated.View
                style={{
                  position: "absolute",
                  top,
                  left: 0,
                  right: 0,
                }}
              >
                <Block
                  width={"100%"}
                  style={{
                    height,
                    backgroundColor: colors.bg,
                    borderTopRightRadius: 16,
                    borderTopLeftRadius: 16,
                  }}
                >
                  <Block row justifyCenter padding={8}>
                    <Block>
                      <Text fontFamily={"title"}>{title}</Text>
                    </Block>
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 16,
                        zIndex: 1,
                      }}
                      onPress={handleClose}
                    >
                      <FontAwesome
                        name={"close"}
                        size={24}
                        color={colors["medium-emphasis"]}
                      />
                    </TouchableOpacity>
                  </Block>
                  {children}
                </Block>
              </Animated.View>
            </TouchableWithoutFeedback>
          </Block>
        )}
      </TouchableWithoutFeedback>
    </ModalBase>
  );
};
